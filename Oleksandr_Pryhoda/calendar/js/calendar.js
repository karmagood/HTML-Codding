const displayCalendar = (date) => {

    let nowDate = new Date();
    let month = date.getMonth();
    let day = date.getDate();
    let year = date.getFullYear();

    let nextMonth = month + 1;
    let nextDate = new Date(nextMonth + ' 1 ,' + year);
    let weekdays = nextDate.getDay() - 1;
    let FebNumberOfDays = 28;

    let monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    if ((month === 1) && (year % 100 !== 0) && (year % 4 === 0) || (year % 400 === 0)){
        FebNumberOfDays = 29;
    }

    let dayPerMonth = ["31","" + FebNumberOfDays + "", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];
    let numOfDays = dayPerMonth[month];

    let counter = 1;
    let calendar = document.getElementById('calendar__numbers');
    while (calendar.firstChild) {
        calendar.removeChild(calendar.firstChild);
    }

    while (counter <= numOfDays) {
        let newDay = document.createElement('section');
        if (weekdays > 0) {
            calendar.appendChild(newDay);
            weekdays--;
        } else {
            if ((counter === day) && (month === nowDate.getMonth()) && (year === nowDate.getFullYear())) {
                newDay.className = 'calendar__days calendar__current-day';
            } else {
                newDay.className = 'calendar__days calendar__number-days';
            }
            newDay.innerText = counter;
            calendar.appendChild(newDay);
            counter++;
        }
    }

    document.getElementById("calendar__month").innerHTML = monthNames[month];
    document.getElementById("calendar__year").innerHTML = year.toString();
    document.getElementById("calendar__numbers").value = calendar;
};

window.onload = function () {
    nowDate = new Date();
    displayCalendar(nowDate);

    document.getElementById('calendar__next-month-button').onclick = function () {
        if (nowDate.getMonth() === 12)
            nowDate.setMonth(1);
        nowDate.setMonth(nowDate.getMonth() + 1);
        displayCalendar(nowDate);
    };

    document.getElementById('calendar__previous-month-button').onclick = function () {
        if (nowDate.getMonth() === 12)
            nowDate.setMonth(1);
        nowDate.setMonth(nowDate.getMonth() - 1);
        displayCalendar(nowDate);
    };

    document.getElementById('calendar__next-year-button').onclick = function () {
        nowDate.setYear(nowDate.getFullYear() + 1);
        displayCalendar(nowDate);
    };

    document.getElementById('calendar__previous-year-button').onclick = function () {
        nowDate.setYear(nowDate.getFullYear() - 1);
        displayCalendar(nowDate);
    };
};