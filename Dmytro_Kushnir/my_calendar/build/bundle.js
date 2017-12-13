/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getLocalMonthNameFromDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getMonthdaysNumberInMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return convertWeekdayIndexAs0IsForMonday; });
/* unused harmony export getDateDataFromCalendar */
const getLocalMonthNameFromDate = (date) =>{
    let locale = "Uk-uk";
    return date.toLocaleString(locale, { month: "long" });
};


const getMonthdaysNumberInMonth = (date) => {
    const d= new Date(date.getFullYear(), date.getMonth()+1, 0);
    return d.getDate();
};


const convertWeekdayIndexAs0IsForMonday = (dayIf0IsForSunday) => {
    if (dayIf0IsForSunday === 0) // case if our day is Sunday
        return 6;
    else
        return dayIf0IsForSunday-1;
};


const getDateDataFromCalendar = (calendar) => {
    return new Date(calendar.dataset.year, calendar.dataset.month);
};




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return markWeekendsNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return markWeekendsDates; });
/* unused harmony export countFillerSizeForDays */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setLeftMarginForFirstDay; });
const markWeekendsNames = (calendar) => {
    let daysList = calendar.querySelectorAll('.calendar__day-names');
    console.log(daysList);
    daysList[6].classList.add ("calendar__day_weekend");
    daysList[5].classList.add ("calendar__day_weekend");
};


const markWeekendsDates = (calendar) => {
    let dateBuf = new Date(calendar.dataset.year, calendar.dataset.month);
    let datesNodes = calendar.querySelectorAll('.calendar__day:not(.calendar__day-names)'); // selecting only date nodes
    console.log(datesNodes);
    let dateNode;
    for (let dateIndex = 0; dateIndex < datesNodes.length; dateIndex ++ ){
        dateNode = datesNodes[dateIndex];
        dateBuf.setDate(parseInt(dateNode.innerHTML));
        if ( dateBuf.getDay() === 0 || dateBuf.getDay() === 6 ){ // if Sunday or Saturday
            dateNode.classList.add("calendar__day_weekend");
        }

    }
};


const countFillerSizeForDays = (prototypeStyle, offsetNumber) => {
    return offsetNumber
        * ( parseInt(prototypeStyle["width"], 10) +
            2 * parseInt(prototypeStyle["marginLeft"], 10)) +
        parseInt(prototypeStyle["marginLeft"], 10);
};

const setLeftMarginForFirstDay = (firstDayElement, firstDayWeekIndexFromMonday) => {
    const dayStyle = window.getComputedStyle(firstDayElement);
    const fillerSize = countFillerSizeForDays(dayStyle, firstDayWeekIndexFromMonday);
    firstDayElement.style.marginLeft = fillerSize + "px";
};





/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calendarVisualRender__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calendarDataManipulations__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calendarStaticPartInit__ = __webpack_require__(4);







debugger;




const refreshCalendarDatesData = (calendar, calendarDate) => {
    Object(__WEBPACK_IMPORTED_MODULE_1__calendarDataManipulations__["c" /* fillDates */])(calendarDate, calendar);
    calendar = Object(__WEBPACK_IMPORTED_MODULE_1__calendarDataManipulations__["d" /* setDateDataOnCalendar */])(calendar, calendarDate);
    Object(__WEBPACK_IMPORTED_MODULE_0__calendarVisualRender__["a" /* markWeekendsDates */])(calendar);
};




// creating calendar node, filling it
const calendarDate = new Date();
console.log("Initial date is " + calendarDate.toDateString());

document.body.innerHTML += Object(__WEBPACK_IMPORTED_MODULE_2__calendarStaticPartInit__["b" /* createCallendarNode */])(calendarDate, __WEBPACK_IMPORTED_MODULE_2__calendarStaticPartInit__["a" /* DAY_NAMES */]);
let calendar = document.querySelector('.calendar');
Object(__WEBPACK_IMPORTED_MODULE_0__calendarVisualRender__["b" /* markWeekendsNames */])(calendar);
refreshCalendarDatesData(calendar, calendarDate);


// adding action buttons
calendar
    .querySelector('.navigaton__swipe-button-prev-month')
    .addEventListener("click", __WEBPACK_IMPORTED_MODULE_1__calendarDataManipulations__["b" /* calendarMoveToPrevMonth */]);

calendar
    .querySelector('.navigaton__swipe-button-next-month')
    .addEventListener("click", __WEBPACK_IMPORTED_MODULE_1__calendarDataManipulations__["a" /* calendarMoveToNextMonth */]);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return calendarMoveToNextMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return calendarMoveToPrevMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setDateDataOnCalendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return fillDates; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calendarDatesUtils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calendarVisualRender__ = __webpack_require__(1);





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
    const daysInMonth = Object(__WEBPACK_IMPORTED_MODULE_0__calendarDatesUtils__["c" /* getMonthdaysNumberInMonth */])(newDateExamplar);

    const dates_panel = calendar.querySelector(".calendar__dates-panel");
    dates_panel.innerHTML = "";
    for (let day = 1; day <= daysInMonth; day ++){
        dates_panel.innerHTML += createDayNodeHTML(day);
    }

    const firstDayOfMonthWeekIndex = Object(__WEBPACK_IMPORTED_MODULE_0__calendarDatesUtils__["a" /* convertWeekdayIndexAs0IsForMonday */])(newDateExamplar.getDay()); // weekday if 0 is for sunday
    Object(__WEBPACK_IMPORTED_MODULE_1__calendarVisualRender__["c" /* setLeftMarginForFirstDay */])(dates_panel.firstElementChild, firstDayOfMonthWeekIndex);
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
    calendar.querySelector('.calendar__monthname').innerHTML = Object(__WEBPACK_IMPORTED_MODULE_0__calendarDatesUtils__["b" /* getLocalMonthNameFromDate */])(date);
    fillDates(date, calendar);
    Object(__WEBPACK_IMPORTED_MODULE_1__calendarVisualRender__["a" /* markWeekendsDates */])(calendar);
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
    calendar.querySelector('.calendar__monthname').innerHTML = Object(__WEBPACK_IMPORTED_MODULE_0__calendarDatesUtils__["b" /* getLocalMonthNameFromDate */])(date);
    fillDates(date, calendar);
    Object(__WEBPACK_IMPORTED_MODULE_1__calendarVisualRender__["a" /* markWeekendsDates */])(calendar);
};




/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createCallendarNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DAY_NAMES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calendarDatesUtils__ = __webpack_require__(0);


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
        <div class="calendar__monthname"> ${Object(__WEBPACK_IMPORTED_MODULE_0__calendarDatesUtils__["b" /* getLocalMonthNameFromDate */])(dateObject)} </div>
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



/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map