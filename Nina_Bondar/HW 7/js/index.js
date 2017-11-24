const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
    'November', 'December'];
const days_labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
cal_days_in_months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


function addCalendarHTML(html) {
    document.getElementsByClassName('calendar-page')[0].innerHTML = html;

}

function createHTML(year, month) {
    let firstDay = new Date(year, month, 1);  //the first day of current month of curr year
    let startingDayOfWeek = firstDay.getDay();  //identifying where this month starts from
    let monthLength = cal_days_in_months[month];
    //checking for leap year
    if (month === 1) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            monthLength = 29;  //leap year Feb length
        }
    }
    //assigning month name on current cal page
    document.getElementById('month-name').innerHTML = months[month];
    //now creating sections for thee days of current month
    let calendarHTML = '';
    console.log(monthLength);
    for (let day = 0; day < monthLength; day++) {
        calendarHTML += '<section class="calendar-page__day">' + (day + 1) + '</section>';
    }
    return calendarHTML;
}

document.addEventListener('DOMContentLoaded', () => {
    let code = createHTML(new Date().getFullYear(), new Date().getMonth());
    addCalendarHTML(code);
});

