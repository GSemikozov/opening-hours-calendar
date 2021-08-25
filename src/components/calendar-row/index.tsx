import React, { useEffect } from "react";
import dayjs from "dayjs";

// import { CalendarRowType } from "../../types"; TODO: fix type
import { formatDate, getCurrentDayName } from "../../helpers";

import styles from "./calendar-row.module.scss";

// @ts-ignore
export const CalendarRow = ({ dayData }: any) => {
    useEffect(() => {
        console.log("--", dayData);
    }, [dayData]);

    const dayName = dayData[0];
    const dayHours = dayData[1];

    return (
        <div className={styles.calendarRow}>
            <b className={styles.calendarCol}>
                {dayName}
                {dayName === getCurrentDayName(dayjs().day()) && (
                    <span className={styles.colBadge}>Today</span>
                )}
            </b>
            <div className={styles.calendarCol}>
                {dayHours && dayHours.length > 0 ? (
                    dayHours.map((item: { value: number }, key: number) => (
                        <div key={key}>
                            {key > 0 && <span className={styles.timeDivider}>-</span>}
                            {formatDate(item.value / 60 / 60)}
                        </div>
                    ))
                ) : (
                    <div>Closed</div>
                )}
            </div>
        </div>
    );
};
