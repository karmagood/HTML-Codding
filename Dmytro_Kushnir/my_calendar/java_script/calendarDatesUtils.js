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


export {getLocalMonthNameFromDate,
    getMonthdaysNumberInMonth,
    convertWeekdayIndexAs0IsForMonday,
    getDateDataFromCalendar
};