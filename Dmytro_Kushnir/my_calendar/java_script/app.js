import {
    markWeekendsNames,
    markWeekendsDates,
    countFillerSizeForDays,
    setLeftMarginForFirstDay
} from './calendarVisualRender';


import {
    calendarMoveToNextMonth,
    calendarMoveToPrevMonth,
    setDateDataOnCalendar ,
    fillDates
} from './calendarDataManipulations';

import {
    createCallendarNode,
    DAY_NAMES
} from './calendarStaticPartInit';

debugger;




const refreshCalendarDatesData = (calendar, calendarDate) => {
    fillDates(calendarDate, calendar);
    calendar = setDateDataOnCalendar(calendar, calendarDate);
    markWeekendsDates(calendar);
};




// creating calendar node, filling it
const calendarDate = new Date();
console.log("Initial date is " + calendarDate.toDateString());

document.body.innerHTML += createCallendarNode(calendarDate, DAY_NAMES);
let calendar = document.querySelector('.calendar');
markWeekendsNames(calendar);
refreshCalendarDatesData(calendar, calendarDate);


// adding action buttons
calendar
    .querySelector('.navigaton__swipe-button-prev-month')
    .addEventListener("click", calendarMoveToPrevMonth);

calendar
    .querySelector('.navigaton__swipe-button-next-month')
    .addEventListener("click", calendarMoveToNextMonth);
