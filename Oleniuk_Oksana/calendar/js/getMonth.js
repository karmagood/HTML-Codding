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
