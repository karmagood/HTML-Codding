const Calendar = (container) => {
  let self = this;

  this.element = document.querySelector(container);
  this.selectedDay = new Date();
  this.month = this.selectedDay.getMonth();
  this.year = this.selectedDay.getFullYear();

  this.weekArray = "Mon,Tue,Wed,Thu,Fr,Sat,Su".split(",");
  this.monthArray = "January,February,March,April,May,June,July,August,September,October,November,December ".split(',');

  this.goToPrevMonth = function(){
    self.setMonth(self.month - 1);
  };

  this.goToNextMonth = function(){
    self.setMonth(self.month + 1);
  };

  this.setMonth = function(monthNumber){

    if (monthNumber < 0) {
      this.month = 11;
      this.year -= 1;
    }

    else if (monthNumber > 11) {
      this.month = 0;
      this.year += 1;
    }
    else {
      this.month = monthNumber;
    }

    let monthTitle = this.element.querySelector(".calendar__header h1"),
      calendarBody = this.element.querySelector(".calendar__body");

    monthTitle.innerHTML = this.monthArray[this.month] + ", " + this.year;
    calendarBody.innerHTML = generateCalendarBody();
  };

  const drawCalendar = () =>{
    self.element.classList.add("calendar");
    drawCalendarHeader();
    drawCalendarBody();
    generateCalendarBody();
    drawCalendarFooter();

  };
  const drawCalendarHeader = () => {
    let header = document.createElement("header");
    header.className = "calendar__header";

    let title = document.createElement("h1");
    title.innerHTML = self.monthArray[self.month] + ", " + self.year;

    let prevBtn = document.createElement("button");
    prevBtn.className = "calendar__btn";
    prevBtn.innerHTML = "<";
    prevBtn.addEventListener('click', self.goToPrevMonth);

    let nextBtn = document.createElement("button");
    nextBtn.className = "calendar__btn";
    nextBtn.innerHTML = ">";
    nextBtn.addEventListener('click', self.goToNextMonth);

    header.appendChild(prevBtn);
    header.appendChild(title);
    header.appendChild(nextBtn);

    self.element.appendChild(header);
  };
  const drawCalendarFooter = () =>{
    let footer = document.createElement("footer");
    footer.className = "calendar__footer";

    footer.innerHTML = "<div class='calendar__day'>" +
        self.weekArray.join("</div><div class='calendar__day'>") + "</div>";

    self.element.appendChild(footer);
  };
  const drawCalendarBody = () => {
    let body = document.createElement("div");
    body.className = "calendar__body";
    body.innerHTML = generateCalendarBody();

    body.addEventListener("click", onDayClick);


    self.element.appendChild(body);
  };

   const generateCalendarBody = () =>{
    let month = new Date(self.year, self.month, 1),
      monthFirstDay = (month.getDay() || 7),
      monthLength = (new Date(self.year, self.month + 1, 0)).getDate(),
      prevMonthLength = (new Date(self.year, self.month, 0)).getDate(),
      monthStr = "",
      i;
    for (i = 0; i < monthFirstDay - 1; i++){
      monthStr = "<div class='calendar__day calendar__day--disabled'><span>" +
                  (prevMonthLength - i) +
                  "</span></div>" + monthStr;
    }
    for (i = 0; i < monthLength; i++){
      let isSelected = (new Date(self.selectedDay.getFullYear(), self.selectedDay.getMonth(),
          self.selectedDay.getDate())).getTime() === (new Date(self.year, self.month, i+1)).getTime();

      monthStr += "<div class='calendar__day" + (isSelected ? " calendar__day--selected" : "")
          + "'><span>" + (i + 1) + "</span></div>";
    }
    for (i = 0; i < (42 - (monthFirstDay - 1) - monthLength); i++){
      monthStr += "<div class='calendar__day calendar__day--disabled'><span>" + (i + 1) + "</span></div>";
    }
    return monthStr;
  };
const onDayClick = (event) =>{
        let target = event.target;
        while (target !== event.currentTarget) {
            if (isDay(target) && !isDaySelected(target)) {
                selectDay(target);
                return;
            }
      target = target.parentNode;
    }
  };
  const isDay = (element) =>{
    return element.classList.contains("calendar__day");
  };
  const isDaySelected = (day) =>{
    return day.classList.contains("calendar__day--selected");
  };
  const selectDay = (day) =>{
    let currentlySelectedDay = self.element.querySelector(".calendar__day_busy");
    day.classList.add("calendar__day_busy");
    self.selectedDay = new Date(self.year, self.month, parseInt(day.children[0].innerHTML));
  };
  drawCalendar();
};