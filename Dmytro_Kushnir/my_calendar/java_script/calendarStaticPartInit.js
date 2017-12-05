import {
    getLocalMonthNameFromDate,
    getMonthdaysNumberInMonth,
    convertWeekdayIndexAs0IsForMonday
} from './calendarDatesUtils'

const DAY_NAMES  = [ 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд' ];

/* creates  static part as plain HTML */
const createCallendarNode = ( dateObject, dayNames) => {
    return  `
    <section class="calendar">

    <nav class="calendar-navigation">
        <button class="navigaton__swipe-button-prev-month"> < </button>
        <button class="navigaton__swipe-button-next-month"> > </button>
    </nav>
    
    <h2>
        <div class="calendar__yearnumber"> ${dateObject.getFullYear()} </div>
        <div class="calendar__monthname"> ${getLocalMonthNameFromDate(dateObject)} </div>
    </h2>

    <header class="calendar__weekday-panel">
    `
        +
        dayNames.map (dayName=> `<div class="calendar__day calendar__day-names"> ${dayName} </div>`).join("")
        +
        `        
    </header>
    <section class = "calendar__dates-panel"></section>
</section> 
`
};

export { createCallendarNode , DAY_NAMES};