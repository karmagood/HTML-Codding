let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let dayPerMonth = ["31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];

const displayCalendar = (date) => {

    let currentDate = new Date();

    let month = date.getMonth();
    console.log(month);
    let day = date.getDate();
    let year = date.getFullYear();

    let monthToManipulate = month + 1;
    console.log(monthToManipulate);

    let dateToManipulate = new Date(monthToManipulate + ' 1 ,' + year);
    console.log(dateToManipulate);
    let startDayOfMonthToManipulate = dateToManipulate.getDay();
    console.log(startDayOfMonthToManipulate);

    let numOfDays = dayPerMonth[month];

    let counter = 1;
    const mainCalendarGrid = document.getElementById('main-calendar');

    while (mainCalendarGrid.firstChild) {
        mainCalendarGrid.removeChild(mainCalendarGrid.firstChild);
    }
    while (counter <= numOfDays) {
        let newDay = document.createElement('section');

        if (startDayOfMonthToManipulate > 0) {
            mainCalendarGrid.appendChild(newDay);
            startDayOfMonthToManipulate--;
        }
        else {
            if (counter === day && month === currentDate.getMonth()) {
                newDay.className = 'main-calendar__day__current';
                newDay.innerText = counter;
                mainCalendarGrid.appendChild(newDay);
                counter++;

            } else {
                newDay.className = 'main-calendar__day';
                newDay.innerText = counter;
                mainCalendarGrid.appendChild(newDay);
                counter++;
            }
        }
    }


    document.getElementById("calendar-header__month").innerHTML = monthNames[month];

    document.getElementById("calendar-header__year").innerHTML = year;

    document.getElementById("main-calendar").value = mainCalendarGrid;

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
        nextDate = increaseMonthAndYear(currentDate);
        displayCalendar(nextDate);
    };

    document.getElementById('button__previous-month').onclick = function() {
        previousDate = decreaseMonthAndYear(currentDate);
        displayCalendar(previousDate);
    };
};