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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__const__ = __webpack_require__(1);


class Calendar {
    constructor(date,root_element) {
        this.date = date;
        this.months = __WEBPACK_IMPORTED_MODULE_0__const__["a" /* MONTHS */];
        this.month = this.date.getMonth();
        this.year = this.date.getFullYear();
        this.root_element = root_element;
    }

    draw(){
        this.drawHeader();
        this.drawMonthDays();
        this.drawWeekDays();
    }

    drawHeader(){
        let calendarHeader = this.root_element.querySelector(".month");

        let monthAndYear = document.createElement("h2");
        monthAndYear.classList.add("month__name");
        monthAndYear.innerHTML = this.months[this.month] + " " + this.year;

        let nextMonth = document.createElement("button");
        nextMonth.classList.add("month__next");
        nextMonth.innerHTML = ">";

        let previousMonth = document.createElement("button");
        previousMonth.classList.add("month__previous");
        previousMonth.innerHTML = "<";

        calendarHeader.appendChild(previousMonth);
        calendarHeader.appendChild(monthAndYear);
        calendarHeader.appendChild(nextMonth);
        nextMonth.addEventListener('click', this.setNextMonth.bind(this));
        previousMonth.addEventListener('click', this.setPreviousMonth.bind(this));

    }

    drawMonthDays(){
        console.log(this.root_element);
        let monthDays = this.root_element.querySelector(".month-days");
        let allDays = "";
        let date = new Date(this.year, this.month, 1);
        let weekDay = date.getDay()|| 7;
        let numberDays = new Date(this.year, this.month+1, 0).getDate();
        if(this.month+1 > 11){
            let numberDays = new Date(this.year+1, 1, 0).getDate();
        }

        let numberPreviousDays = new Date(this.year+1,this.month , 0).getDate();
        let startDay = numberPreviousDays - weekDay + 1;

        for (let i=0; i<weekDay-1; i++){
            allDays += "<button class='month-day__prev month-day'>"+startDay+"</button>";
            startDay++;
        }

        for (let j=1; j<=numberDays; j++ ){
            allDays += "<button class='month-day'>"+j+"</button>";
        }

        let nextMonthDays = 7 - (weekDay + numberDays-1)%7;
        console.log(nextMonthDays);
        if (nextMonthDays>0 && nextMonthDays<7){
            for (let j=1; j <= nextMonthDays; j++ ) {
                allDays += "<button class='month-day__next month-day'>" + j + "</button>";
            }
        }
        monthDays.innerHTML = allDays;
        if(this.date.getMonth() == this.month){
            console.log("dsf");
            let today = this.root_element.getElementsByClassName("month-day")[this.date.getDate()+weekDay-2];
            today.classList.add("month-day__today");

        }
    }

    drawWeekDays(){
        let weekDays = this.root_element.querySelector(".days-name");
        let daysName = ['MO','TU','WE','TH','FR','SA','SU'];
        for(let j=0; j<7; j++){
            let dayName = document.createElement('p');
            dayName.classList.add("days-name__name");
            dayName.innerHTML = daysName[j];
            weekDays.appendChild(dayName);
        }

    }

    setNextMonth(){
        this.month += 1;
        if (this.month > 11) {
            this.month = 0;
            this.year += 1;
        }

        let monthName = this.root_element.querySelector(".month__name");
        monthName.innerHTML = this.months[this.month] + " " + this.year;
        this.drawMonthDays();
    }

    setPreviousMonth(){
        this.month -= 1;
        if (this.month < 0) {
            this.month = 11;
            this.year -= 1;
        }
        let monthName = this.root_element.querySelector(".month__name");
        monthName.innerHTML = this.months[this.month] + " " + this.year;
        this.drawMonthDays();
    }

}
let root_element =document.getElementsByClassName("calendar")[0];
let c = new Calendar(new Date(),root_element);
c.draw();

let root_element1 =document.getElementsByClassName("calendar")[1];
let c1 = new Calendar(new Date(),root_element1);
c1.draw();


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
/* harmony export (immutable) */ __webpack_exports__["a"] = MONTHS;


/***/ })
/******/ ]);