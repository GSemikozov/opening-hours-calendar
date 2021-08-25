import React from "react";

import { CalendarBody } from "../calendar-body";
import { CalendarHeader } from "../calendar-header";

import styles from "./calendar.module.scss";

export const Calendar = () => (
    <div className={styles.calendar}>
        <CalendarHeader />
        <CalendarBody />
    </div>
);
