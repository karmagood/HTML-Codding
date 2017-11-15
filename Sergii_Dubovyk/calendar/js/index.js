const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
    'November', 'December'];

let displayedDate;

const renderMonth = (date) => {
  let daysNumber = getDaysNumInMonth(date);
  const calendarGrid = document.getElementById('calendar-grid');
  renderDays(daysNumber, calendarGrid);
  renderHeader(date);
};

const renderHeader = (date) => {
    document.getElementById('month-name').innerText = months[date.getMonth()];
    document.getElementById('year-num').innerText = date.getFullYear().toString();
};

const renderDays = (daysNumber, calendarGrid) => {
    while (calendarGrid.firstChild){
        calendarGrid.removeChild(calendarGrid.firstChild);
    }
    for(let dayCounter = 0; dayCounter < daysNumber; dayCounter++){
        let newDay = document.createElement('section');
        newDay.className = 'calendar-page__day';
        newDay.innerText = dayCounter + 1;
        calendarGrid.appendChild(newDay);
    }
};

const getDaysNumInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};

const incrementMonth = (date) => {
    if (date.getMonth() === 12){
        date.setMonth(1);
        date.setYear(date.getFullYear() + 1);
    } else {
        date.setMonth(date.getMonth() + 1);
    }
    return date;
};

$(document).ready(() => {
    displayedDate = new Date();
    renderMonth(displayedDate);

    $('#incrMonth').on('click', () => {
        displayedDate = incrementMonth(displayedDate);
        renderMonth(displayedDate);
    });

    $('#decrMonth').on('click', () => {
        displayedDate.setMonth(displayedDate.getMonth() - 1);
        renderMonth(displayedDate);
    });
});