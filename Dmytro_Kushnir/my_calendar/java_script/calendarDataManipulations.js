import {
    getLocalMonthNameFromDate,
    getMonthdaysNumberInMonth,
    convertWeekdayIndexAs0IsForMonday} from './calendarDatesUtils'

import {
    markWeekendsNames,
    markWeekendsDates,
    countFillerSizeForDays,
    setLeftMarginForFirstDay
} from './calendarVisualRender';


const setDateDataOnCalendar = (calendar, dateObject) => {
    calendar.dataset.year = dateObject.getFullYear();
    calendar.dataset.month = dateObject.getMonth();
    return calendar;
};

const createDayNodeHTML = (dayNumber) => {
    return ` <section class="calendar__day"> ${dayNumber} </section> ` ;
};


// I've decided not to create fake nodes, but make a real offset instead
const fillDates = (date, calendar) => {
    const newDateExamplar = new Date(date.getFullYear(), date.getMonth(), 1); // to avoid mutations of input and set date to 1
    const daysInMonth = getMonthdaysNumberInMonth(newDateExamplar);

    const dates_panel = calendar.querySelector(".calendar__dates-panel");
    dates_panel.innerHTML = "";
    for (let day = 1; day <= daysInMonth; day ++){
        dates_panel.innerHTML += createDayNodeHTML(day);
    }

    const firstDayOfMonthWeekIndex = convertWeekdayIndexAs0IsForMonday(newDateExamplar.getDay()); // weekday if 0 is for sunday
    setLeftMarginForFirstDay(dates_panel.firstElementChild, firstDayOfMonthWeekIndex);
    return calendar.innerHTML;
};


const calendarMoveToNextMonth  = (ev) => {
    let calendar = document.querySelector(".calendar");
    calendar.dataset.month ++;
    if ( parseInt(calendar.dataset.month) === 12) {
        calendar.dataset.month = 0;
        calendar.dataset.year ++;
        calendar.querySelector('.calendar__yearnumber').innerHTML = calendar.dataset.year;
    }
    let date = new Date(calendar.dataset.year, calendar.dataset.month);
    calendar.querySelector('.calendar__monthname').innerHTML = getLocalMonthNameFromDate(date);
    fillDates(date, calendar);
    markWeekendsDates(calendar);
};

const calendarMoveToPrevMonth  = (ev) => {
    let calendar = document.querySelector(".calendar");
    calendar.dataset.month --;
    if ( parseInt(calendar.dataset.month) === -1) {
        calendar.dataset.month = 11 ;
        calendar.dataset.year --;
        console.log(calendar.dataset.year);
        calendar.querySelector('.calendar__yearnumber').innerHTML = calendar.dataset.year;
    }
    let date = new Date(calendar.dataset.year, calendar.dataset.month);
    calendar.querySelector('.calendar__monthname').innerHTML = getLocalMonthNameFromDate(date);
    fillDates(date, calendar);
    markWeekendsDates(calendar);
};


export {
    calendarMoveToNextMonth,
    calendarMoveToPrevMonth,
    setDateDataOnCalendar ,
    fillDates
} ;