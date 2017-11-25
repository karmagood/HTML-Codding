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
/***/ (function(module, exports, __webpack_require__) {

document.write(__webpack_require__(1));
document.write(__webpack_require__(2));
document.write(__webpack_require__(3));

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
var day = new Date();
var currentMonthDigit = day.getMonth();
var output = monthNames[day.getMonth()];
document.getElementById("getMonth").innerHTML = output;

const getDaysNumInMonth = (date) => {
    var tmp = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return tmp.getDate();
};

document.getElementById('buttons').addEventListener('click', function (evt) {
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    var target = evt.target;
    var d = new Date();

    if (target.id === 'monthNext') {
        if (currentMonthDigit >= 11) {
            currentMonthDigit = -1;
        }
        currentMonthDigit = currentMonthDigit + 1;
        d.setMonth(currentMonthDigit);
        renderMonth(d);
        var output = monthNames[currentMonthDigit];
        document.getElementById("getMonth").innerHTML = output;
    } else if (target.id === 'monthPrevious') {
        if (currentMonthDigit <= 0) {
            currentMonthDigit = 12;
        }
        currentMonthDigit = currentMonthDigit - 1;
        d.setMonth(currentMonthDigit);
        renderMonth(d);
        var output = monthNames[currentMonthDigit];
        document.getElementById("getMonth").innerHTML = output;
    }

}, false);


const renderDays = (daysNumber, calendarGrid) => {
    for(var dayCounter = 1; dayCounter <= daysNumber; dayCounter++){
        var newDay = document.createElement('section');
        newDay.className = 'calendar__day';
        newDay.innerText = dayCounter;
        calendarGrid.appendChild(newDay);
    }
};

const clearGrid = (grid) => {
    while (grid.firstChild){
        grid.removeChild(grid.firstChild);
    }
};

const renderGridOffset = (grid, offset) => {
    for(var dayCounter = 0; dayCounter <= offset; dayCounter++){
        var newDay = document.createElement('section');
        newDay.className = 'calendar__day_disabled';
        grid.appendChild(newDay);
    }
};
const renderMonth = (date) => {
    const daysNumber = getDaysNumInMonth(date);
    const calendarGrid = document.getElementById('calendar-grid');
    clearGrid(calendarGrid);
    renderGridOffset(calendarGrid, date.getDay() - 1);
    renderDays(daysNumber, calendarGrid);

}
day.setMonth(currentMonthDigit);
renderMonth(day);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
var dayList = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

var dateObj = new Date();
var day = dateObj.getUTCDate();

// var year = dateObj.getUTCFullYear();
var weekDay = dayList[dateObj.getDay()];
var month = monthNames[dateObj.getMonth()];


newdate = weekDay + " , " + month + " " + day;
document.getElementById("getDate").innerHTML = newdate;



/***/ }),
/* 3 */
/***/ (function(module, exports) {


function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
        h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}


/***/ })
/******/ ]);