import * as React from "react";
import moment from "moment";

// export = CalendarX; 
export declare class Waypoint extends React.FunctionComponent<CalendarxProps> {
    useCalendar: (props: CalendarxProps) => CalendarxChildrenProps;
};

declare namespace CalendarX {

    type DateLike = Date | string | number | moment.Moment;
    type DateUnit = "year" | "month" | "week" | "day";
    type WeekdayNum = 0 | 1 | 2 | 3 | 4 | 5 | 6;

    interface BaseEvent {
        date: DateLike;
    }

    interface CalendarxEvent extends BaseEvent {
        [key: string]: any;
    }

    interface CalendarxDay {
        date: Date;
        events: CalendarxEvent[];
        isToday: boolean;
        isSame: (unit: DateUnit) => boolean;
    }

    interface CalendarxChildrenProps {
        days: CalendarxDay[][];
        date: Date;
        view: DateUnit;
        jump: (n: number, units: DateUnit) => void;
        goToNext: () => void;
        goToPrev: () => void;
        goToToday: () => void;
        goToDate: (date: DateLike) => void;
        headers: { title: string; day: number }[];
    }

    interface CalendarxProps {
        children?: React.SFC<CalendarxChildrenProps>;
        date?: DateLike;
        initialDate?: DateLike;
        initialNumDays?: number;
        numDays?: number;
        events?: CalendarxEvent[];
        weekStartsOn?: WeekdayNum;
        headers?: string[];
        render?: any;
    }

    const Calendar: React.FunctionComponent<CalendarxProps> & {
        useCalendar: (props: CalendarxProps) => CalendarxChildrenProps;
    };

    // export default Calendar;
    function useCalendar(props?: CalendarxProps): CalendarxChildrenProps;
}
