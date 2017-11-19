import {DateTime} from 'luxon'
import {splitEvery} from 'ramda';

const generateCalendarModel = (day, startDay = 0) => {
    const DAYS_AT_THE_WEEK = 7;
    const date = DateTime.fromJSDate(day);
    const numberOfDays = date.daysInMonth;

    // Скоректуємо день початку тиждня відповідно стартового дня
    // (тиждень може розпочинатись з понеділка, вівторка, чи будь-якого іншого дня)
    let weekday = (DAYS_AT_THE_WEEK - (startDay - date.set({day: 1}).weekday)) % DAYS_AT_THE_WEEK;

    return splitEvery(DAYS_AT_THE_WEEK)
        ([
            ...Array(weekday).fill(), // "Prefix array"
            ...Array(numberOfDays).fill().map((el, i) => i+1) // Calendar
        ])
};

const render = (calendarModel) => {
    return calendarModel.map ( row => `
        <div class="week">${row.map (day => `<span class="day">${day || ""}</span>`).join("") }</div>
    `).join("")
}

for ( let i = 0; i < 12; i++) {
    document.body.innerHTML += render(generateCalendarModel(new Date( new Date().setMonth(i) ), 1 ));
}
