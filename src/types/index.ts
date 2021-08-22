export enum DaysEnum {
    monday = "Monday",
    tuesday = "Tuesday",
    wednesday = "Wednesday",
    thursday = "Thursday",
    friday = "Friday",
    saturday = "Saturday",
    sunday = "Sunday",
}

export type CalendarRowType = {
    dayType: DaysEnum;
    dayName: string;
};
