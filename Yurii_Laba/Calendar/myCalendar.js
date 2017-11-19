let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let dayPerMonth = ["31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];

const displayCalendar = (date) => {

    let currentDate = new Date();

    let month = date.getMonth();
    let day = date.getDate();
    let year = date.getFullYear();

    let nextMonth = month + 1;


    let nextDate = new Date(nextMonth + ' 1 ,' + year);
    let weekdays = nextDate.getDay();

    let numOfDays = dayPerMonth[month];

    let counter = 1;
    const calendarGrid = document.getElementById('main-calendar');

    while (calendarGrid.firstChild) {
        calendarGrid.removeChild(calendarGrid.firstChild);
    }
    while (counter <= numOfDays) {
        let newDay = document.createElement('section');

        if (weekdays > 0) {
            calendarGrid.appendChild(newDay);
            weekdays--;
        }
        else {
            if (counter === day && month === currentDate.getMonth()) {
                newDay.className = 'main-calendar__day__current';
                newDay.innerText = counter;
                calendarGrid.appendChild(newDay);
                counter++;

            } else {
                newDay.className = 'main-calendar__day';
                newDay.innerText = counter;
                calendarGrid.appendChild(newDay);
                counter++;
            }
        }
    }


    document.getElementById("calendar-header__month").innerHTML = monthNames[month];

    document.getElementById("calendar-header__year").innerHTML = year;

    document.getElementById("main-calendar").value = calendarGrid;

};




const increaseMonthAndYear = (date) => {
    if (date.getMonth() === 12) {
        date.setMonth(1);
        date.setYear(date.getFullYear() + 1);
    } else {
        date.setMonth(date.getMonth() + 1);
    }
    return date;
};

const decreaseMonthAndYear = (date) => {
    if (date.getMonth() === 12) {
        date.setMonth(1);
        date.setYear(date.getFullYear() - 1);
    } else {
        date.setMonth(date.getMonth() - 1);
    }
    return date;
};


window.onload = function () {
    currentDate = new Date();
    displayCalendar(currentDate);
    document.getElementById('button__next-month').onclick = function () {
        nextDate = decreaseMonthAndYear(currentDate);
        increaseMonthAndYear(nextDate);
    };

    // document.getElementById('button__previous-month').onclick = function() {
    //     previousDate = decreaseMonthAndYear(currentDate);
    //     previousdisplayCalendar(previousDate);
    // };
};