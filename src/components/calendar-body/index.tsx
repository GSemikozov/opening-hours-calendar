import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

import { CalendarRow } from "../calendar-row";
import { CalendarDataResponse, DayData } from "../../types";

import { config } from "../../constants";

import { CalendarRowSkeleton } from "../calendar-row-skeleton";
import { TimeAvailabilityEnum } from "../../types";

const initDataState = {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
};

export const CalendarBody = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setLoadedData] = useState(initDataState);
    const [modifiedData, setModifiedData] = useState();

    const toggleLoading = () => {
        setIsLoading((prev) => !prev);
    };

    const hasCloseData = useCallback(
        (data: DayData[]) =>
            data.length > 0 && data[data.length - 1].type === TimeAvailabilityEnum.close,
        [],
    );

    const isClosed = useCallback((data: DayData[]) => data.length === 0, []);

    const getAdjustedDay = useCallback(
        ({ current, next }: { current: DayData[]; next: DayData[] }) => {
            if (isClosed(current)) {
                return { current: current, next: next };
            } else {
                return !hasCloseData(current)
                    ? {
                          current: [...current, next[0]],
                          next: next.slice(1),
                      }
                    : { current: current, next: next };
            }
        },
        [hasCloseData, isClosed],
    );

    const modifyData = useCallback(() => {
        // const isExistInData = (data: (string | DayData[])[][], key: string) => {
        //     return data.find((item) => item[0] === key);
        // };

        const modifiedData = (data: CalendarDataResponse) => {
            const dataArray = Object.entries(data);
            const reduce = dataArray.reduce(
                // @ts-ignore
                (acc, currentDay, currentIndex) => {
                    const prevEl = acc[currentIndex === 0 ? acc.length - 1 : currentIndex - 1];
                    const adjustedDays = getAdjustedDay({
                        current: prevEl[1],
                        next: currentDay[1],
                    });
                    const accumulator = acc.filter(
                        (item) => item[0] !== prevEl[0] && item[0] !== currentDay[0],
                    );
                    return [
                        ...accumulator,
                        ...[
                            [prevEl[0], adjustedDays.current],
                            [currentDay[0], adjustedDays.next],
                        ],
                    ];
                },
                [dataArray[0]],
            );

            return reduce;
            // return Object.fromEntries(reduce);
        };
        // @ts-ignore
        data && setModifiedData(modifiedData(data));
    }, [data, getAdjustedDay]);

    const fetchData = useCallback(() => {
        toggleLoading();
        setTimeout(() => {
            axios
                .get(`${config.url.API_URL}/days`)
                .then((resp) => {
                    setLoadedData(resp.data);
                    toggleLoading();
                })
                .catch((error) => {
                    console.log(error);
                    toggleLoading();
                });
        }, 1000);
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    useEffect(() => {
        data && modifyData();
    }, [data, modifyData]);

    return (
        <>
            {isLoading ? (
                <>
                    {[...Array.from(Array(7).keys())].map((key) => (
                        <CalendarRowSkeleton key={key} />
                    ))}
                </>
            ) : (
                <>
                    {!isLoading &&
                        modifiedData &&
                        // @ts-ignore
                        modifiedData.map((item) => <CalendarRow key={item[0]} dayData={item} />)}
                </>
            )}
        </>
    );
};
