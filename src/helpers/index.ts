import dayjs from "dayjs";

import { DaysEnum } from "../types";

export const getCurrentDayName = (dayIndex: number) => {
    switch (dayIndex) {
        case 0:
            return DaysEnum.sunday;
        case 1:
            return DaysEnum.monday;
        case 2:
            return DaysEnum.tuesday;
        case 3:
            return DaysEnum.wednesday;
        case 4:
            return DaysEnum.thursday;
        case 5:
            return DaysEnum.friday;
        case 6:
            return DaysEnum.saturday;
        default:
            return "";
    }
};

export const formatDate = (hours: number) => {
    const now = dayjs().startOf("day");
    const newDate = now.add(hours, "hour");
    return dayjs(newDate).format("h a");
};

export const capitalizeFirstLetter = (str: string) => str.replace(/^./, str[0].toUpperCase());
