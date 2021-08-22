import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";

import { config } from "../../constants";
import { CalendarRowType } from "../../types";
import { formatDate, getCurrentDayName } from "../../helpers";

import styles from "./calendar-row.module.scss";

export const CalendarRow = ({ dayType, dayName }: CalendarRowType) => {
    const [isLoading, setIsLoading] = useState(false);
    const [dayData, setDayData] = useState([{ type: "open", value: 0 }]);

    const toggleLoading = () => {
        setIsLoading((prev) => !prev);
    };

    const fetchData = useCallback(() => {
        toggleLoading();
        setTimeout(() => {
            axios
                .get(`${config.url.API_URL}/${dayType}`)
                .then((resp) => {
                    console.log(resp.data);
                    setDayData(resp.data);
                    toggleLoading();
                })
                .catch((error) => {
                    console.log(error);
                    toggleLoading();
                });
        }, 1000);
    }, [dayType]);

    useEffect(() => {
        fetchData();
        console.log(getCurrentDayName(dayjs().day()));
    }, [fetchData]);

    const DayData = () => (
        <>
            {dayData.length > 0 ? (
                dayData.map((item, key) => (
                    <div key={key}>
                        {key > 0 && <span className={styles.timeDivider}>-</span>}
                        {formatDate(item.value / 60 / 60)}
                    </div>
                ))
            ) : (
                <div>Closed</div>
            )}
        </>
    );

    return (
        <div className={styles.calendarRow}>
            <b className={styles.calendarCol}>
                {dayName}
                <span className={styles.colBadge}>Today</span>
            </b>
            <div className={styles.calendarCol}>
                {isLoading ? <div className={styles.calendarRowSkeleton} /> : <DayData />}
            </div>
        </div>
    );
};
