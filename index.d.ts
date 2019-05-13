import * as React from "react";
import moment from "moment";

export = CalendarX; 

declare function CalendarX(props: CalendarX.Props): React.FunctionComponent<CalendarX.Props> & {
    useCalendar(props?: CalendarxProps): CalendarxChildrenProps;
}

// export function useCalendar(props: CalendarX.Props): CalendarX.ChildrenProps;

declare namespace CalendarX {
    type DateLike = Date | string | number | moment.Moment;
    type DateUnit = "year" | "month" | "week" | "day";
    type WeekdayNum = 0 | 1 | 2 | 3 | 4 | 5 | 6;

    interface BaseEvent {
        date: DateLike;
    }

    interface Event extends BaseEvent {
        [key: string]: any;
    }

    interface Day {
        date: Date;
        events: Event[];
        isToday: boolean;
        isSame: (unit: DateUnit) => boolean;
    }

    interface ChildrenProps {
        days: Day[][];
        date: Date;
        view: DateUnit;
        jump: (n: number, units: DateUnit) => void;
        goToNext: () => void;
        goToPrev: () => void;
        goToToday: () => void;
        goToDate: (date: DateLike) => void;
        headers: { title: string; day: number }[];
    }

    interface Props {
        children?: React.SFC<ChildrenProps>;
        date?: DateLike;
        initialDate?: DateLike;
        initialNumDays?: number;
        numDays?: number;
        events?: Event[];
        weekStartsOn?: WeekdayNum;
        headers?: string[];
        render?: any;
    }

    export function useCalendar(props?: CalendarxProps): CalendarxChildrenProps;
}
