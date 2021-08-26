import React from "react";
import dayjs from "dayjs";

import { CalendarRowType } from "../../types";
import { capitalizeFirstLetter, formatDate, getCurrentDayName } from "../../helpers";

import styles from "./calendar-row.module.scss";

export const CalendarRow = ({ dayData }: { dayData: CalendarRowType }) => {
    const dayName = capitalizeFirstLetter(dayData[0]);
    const dayHours = dayData[1];

    const HoursOutput = ({
        value,
        idx,
        isLast,
    }: {
        value: number;
        idx: number;
        isLast: boolean;
    }) => (
        <div>
            {formatDate(value / 60 / 60).toUpperCase()}
            {idx % 2 === 0 && !isLast && <span className={styles.timeDivider}>-</span>}
            {idx > 0 && idx % 2 !== 0 && !isLast && <span>,&ensp;</span>}
        </div>
    );

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
                        <HoursOutput
                            key={key}
                            idx={key}
                            value={item.value}
                            isLast={dayHours.length - 1 === key}
                        />
                    ))
                ) : (
                    <div className={styles.noData}>Closed</div>
                )}
            </div>
        </div>
    );
};
