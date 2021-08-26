import React, { useCallback, useEffect, useState } from "react";

import { CalendarRow } from "../calendar-row";
import { CalendarDataResponse, CalendarRowType, DayData, TimeAvailabilityEnum } from "../../types";

import { CalendarRowSkeleton } from "../calendar-row-skeleton";
import { getData } from "../../api";

export const CalendarBody = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setLoadedData] = useState<CalendarDataResponse>();
    const [modifiedData, setModifiedData] = useState<CalendarRowType[]>([]);

    const toggleLoading = () => {
        setIsLoading((prev) => !prev);
    };

    const hasCloseData = useCallback(
        (data: DayData[]) =>
            data.length > 0 && data[data.length - 1].type === TimeAvailabilityEnum.close,
        [],
    );

    const isClosed = useCallback((data: DayData[]) => data.length === 0, []);

    /* checking and modifying */
    const getAdjustedDays = useCallback(
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

    /* for more convenient use and display */
    const modifyData = useCallback(() => {
        const modifiedData = (data: CalendarDataResponse): CalendarRowType[] => {
            const dataArray = Object.entries(data);
            return dataArray.reduce(
                (acc: Array<any>, nextDay, currentIndex) => {
                    const currentDay = acc[currentIndex === 0 ? acc.length - 1 : currentIndex - 1];
                    const adjustedDays = getAdjustedDays({
                        current: currentDay[1],
                        next: nextDay[1],
                    });
                    const accumulator = acc.filter(
                        (item) => item[0] !== currentDay[0] && item[0] !== nextDay[0],
                    );
                    return [
                        ...accumulator,
                        ...[
                            [currentDay[0], adjustedDays.current],
                            [nextDay[0], adjustedDays.next],
                        ],
                    ];
                },
                [dataArray[0]],
            );
        };
        data && setModifiedData(modifiedData(data));
    }, [data, getAdjustedDays]);

    const fetchData = useCallback(() => {
        toggleLoading();
        getData()
            .then((resp) => {
                setLoadedData(resp.data);
                toggleLoading();
            })
            .catch((error) => {
                new Error(error);
                toggleLoading();
            });
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
                        modifiedData.map((item, idx) => <CalendarRow key={idx} dayData={item} />)}
                </>
            )}
        </>
    );
};
