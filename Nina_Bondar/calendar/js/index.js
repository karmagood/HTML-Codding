const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
    'November', 'December'];

let displayedDate;

const getDaysNumInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};

const renderHeader = (date) => {
    document.getElementById('month-name').innerText = months[date.getMonth()];
    document.getElementById('year-num').innerText = date.getFullYear().toString();
};

const renderDays = (daysNumber, calendarGrid) => {
    for(let dayCounter = 1; dayCounter <= daysNumber; dayCounter++){
        let newDay = document.createElement('section');
        newDay.className = 'calendar-block__day';
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
    for(let dayCounter = 0; dayCounter <= offset; dayCounter++){
        let newDay = document.createElement('section');
        newDay.className = 'calendar-page__day calendar-page__day_hidden';
        grid.appendChild(newDay);
    }
};

const renderMonth = (date) => {
    const daysNumber = getDaysNumInMonth(date);
    const calendarGrid = document.getElementById('calendar-grid');
    clearGrid(calendarGrid);
    renderGridOffset(calendarGrid, date.getDay() - 1);
    renderDays(daysNumber, calendarGrid);
    renderHeader(date);
};

$(document).ready(() => {
    displayedDate = new Date();
    renderMonth(displayedDate);

    $('#incrMonth').on('click', () => {
        displayedDate.setMonth(displayedDate.getMonth() + 1);
        renderMonth(displayedDate);
    });

    $('#decrMonth').on('click', () => {
        displayedDate.setMonth(displayedDate.getMonth() - 1);
        renderMonth(displayedDate);
    });
});
