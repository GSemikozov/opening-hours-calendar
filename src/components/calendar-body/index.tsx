import React, { useEffect } from "react";

import { CalendarRow } from "../calendar-row";
import { DaysEnum } from "../../types";

export const CalendarBody = () => {
    useEffect(() => {
        console.log("CalendarBody");
    }, []);

    return (
        <>
            <CalendarRow dayName={DaysEnum.monday} dayType={DaysEnum.monday} />
            <CalendarRow dayName={DaysEnum.tuesday} dayType={DaysEnum.tuesday} />
            <CalendarRow dayName={DaysEnum.wednesday} dayType={DaysEnum.wednesday} />
            <CalendarRow dayName={DaysEnum.thursday} dayType={DaysEnum.thursday} />
            <CalendarRow dayName={DaysEnum.friday} dayType={DaysEnum.friday} />
            <CalendarRow dayName={DaysEnum.saturday} dayType={DaysEnum.saturday} />
            <CalendarRow dayName={DaysEnum.sunday} dayType={DaysEnum.sunday} />
        </>
    );
};
