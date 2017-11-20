import {REGULAR_DAY, DAYS_AT_THE_WEEK} from './consts';
import {DateTime} from 'luxon'
import {splitEvery} from 'ramda';

class Calendar {
    constructor() {
        this.days = Array(5)
            .fill()
            .map(() => new Array(7).fill(0));
    }

    render(days) {
        return days.map(row => `
        <div class="Calendar__week">${row.map(day => `<span class="Calendar__day">${day || ""}</span>`).join("") }</div>
    `).join("")
    }


    generateMonth(day, startDay = 0) {
        const date = DateTime.fromJSDate(day);
        const numberOfDays = date.daysInMonth;

        let weekday = (DAYS_AT_THE_WEEK - (startDay - date.set({day: 1}).weekday)) % DAYS_AT_THE_WEEK;

        return splitEvery(DAYS_AT_THE_WEEK)
        ([
            ...Array(weekday).fill(), // "Prefix array"
            ...Array(numberOfDays).fill().map((el, i) => i + 1) // Calendar
        ])
    };

}


export default Calendar;
