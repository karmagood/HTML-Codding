class myCalendar {
    constructor(date) {
        this.date = date;
        this.allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.allDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        this.curMonth = this.date.getMonth();
        this.curYear = this.date.getFullYear();
        this.curDay = this.date.getDay();
    }

    calendarHeader() {
        let monthYear = this.allMonths[this.curMonth] + " " + this.curYear;
        let curWeekDay = this.allDays[this.curDay - 1];
        document.body.innerHTML = `<h1 class="cal-header">${monthYear}</h1>`;
        document.body.
    }

    calendarBody(day, startDay) {
        let weekday = 7 - (startDay - this.date.set({day: 1}).weekday) % 7;
        return weekday;
    }



}

let c = new myCalendar(new Date());
c.calendarHeader();
