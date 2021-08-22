import React, { useEffect } from "react";

import { CalendarBody } from "../calendar-body";
import { CalendarHeader } from "../calendar-header";

import styles from "./calendar.module.scss";

export const Calendar = () => {
    useEffect(() => {
        console.log("Calendar");
    }, []);

    return (
        <div className={styles.calendar}>
            <CalendarHeader />
            <CalendarBody />
        </div>
    );
};
