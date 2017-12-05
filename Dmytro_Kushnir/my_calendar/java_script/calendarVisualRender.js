const markWeekendsNames = (calendar) => {
    let daysList = calendar.querySelectorAll('.calendar__day-names');
    console.log(daysList);
    daysList[6].classList.add ("calendar__day_weekend");
    daysList[5].classList.add ("calendar__day_weekend");
};


const markWeekendsDates = (calendar) => {
    let dateBuf = new Date(calendar.dataset.year, calendar.dataset.month);
    let datesNodes = calendar.querySelectorAll('.calendar__day:not(.calendar__day-names)'); // selecting only date nodes
    console.log(datesNodes);
    let dateNode;
    for (let dateIndex = 0; dateIndex < datesNodes.length; dateIndex ++ ){
        dateNode = datesNodes[dateIndex];
        dateBuf.setDate(parseInt(dateNode.innerHTML));
        if ( dateBuf.getDay() === 0 || dateBuf.getDay() === 6 ){ // if Sunday or Saturday
            dateNode.classList.add("calendar__day_weekend");
        }

    }
};


const countFillerSizeForDays = (prototypeStyle, offsetNumber) => {
    return offsetNumber
        * ( parseInt(prototypeStyle["width"], 10) +
            2 * parseInt(prototypeStyle["marginLeft"], 10)) +
        parseInt(prototypeStyle["marginLeft"], 10);
};

const setLeftMarginForFirstDay = (firstDayElement, firstDayWeekIndexFromMonday) => {
    const dayStyle = window.getComputedStyle(firstDayElement);
    const fillerSize = countFillerSizeForDays(dayStyle, firstDayWeekIndexFromMonday);
    firstDayElement.style.marginLeft = fillerSize + "px";
};



export {
    markWeekendsNames,
    markWeekendsDates,
    countFillerSizeForDays,
    setLeftMarginForFirstDay
};