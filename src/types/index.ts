export enum DaysEnum {
    monday = "Monday",
    tuesday = "Tuesday",
    wednesday = "Wednesday",
    thursday = "Thursday",
    friday = "Friday",
    saturday = "Saturday",
    sunday = "Sunday",
}

export enum TimeAvailabilityEnum {
    close = "close",
    open = "open",
}

export type DayData = {
    type: TimeAvailabilityEnum;
    value: number;
};

export type CalendarRowType = (string | DayData)[];

export type CalendarDataResponse = {
    monday: DayData[];
    tuesday: DayData[];
    wednesday: DayData[];
    thursday: DayData[];
    friday: DayData[];
    saturday: DayData[];
    sunday: DayData[];
};
