class Calendar {
    constructor(date) {
        this.date = date;
        this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.month = this.date.getMonth();
        this.year = this.date.getFullYear();
    }

    draw(){
        this.drawHeader();
        this.drawMonthDays();
        this.drawWeekDays();
    }

    drawHeader(){
        let calendarHeader = document.getElementsByClassName("month")[0];

        let monthAndYear = document.createElement("h2");
        monthAndYear.classList.add("month__name");
        monthAndYear.innerHTML = this.months[this.month] + " " + this.year;

        let nextMonth = document.createElement("button");
        nextMonth.classList.add("month__next");
        nextMonth.innerHTML = ">";

        let previousMonth = document.createElement("button");
        previousMonth.classList.add("month__previous");
        previousMonth.innerHTML = "<";

        calendarHeader.appendChild(previousMonth);
        calendarHeader.appendChild(monthAndYear);
        calendarHeader.appendChild(nextMonth);
        nextMonth.addEventListener('click', this.setNextMonth.bind(this));
        previousMonth.addEventListener('click', this.setPreviousMonth.bind(this));

    }

    drawMonthDays(){
        let monthDays = document.querySelector(".month-days");
        let allDays = "";
        let date = new Date(this.year, this.month, 1);
        let weekDay = date.getDay()|| 7;
        let numberDays = new Date(this.year, this.month+1, 0).getDate();
        if(this.month+1 > 11){
            let numberDays = new Date(this.year+1, 1, 0).getDate();
        }

        let numberPreviousDays = new Date(this.year+1,this.month , 0).getDate();
        let startDay = numberPreviousDays - weekDay + 1;

        for (let i=0; i<weekDay-1; i++){
            allDays += "<button class='month-day__prev month-day'>"+startDay+"</button>";
            startDay++;
        }

        for (let j=1; j<=numberDays; j++ ){
            allDays += "<button class='month-day'>"+j+"</button>";
        }

        let nextMonthDays = 7 - (weekDay + numberDays-1)%7;
        console.log(nextMonthDays);
        if (nextMonthDays>0 && nextMonthDays<7){
            for (let j=1; j <= nextMonthDays; j++ ) {
                allDays += "<button class='month-day__next month-day'>" + j + "</button>";
            }
        }
        monthDays.innerHTML = allDays;
    }

    drawWeekDays(){
        let weekDays = document.querySelector(".days-name");
        let daysName = ['MO','TU','WE','TH','FR','SA','SU'];
        for(let j=0; j<7; j++){
            let dayName = document.createElement('p');
            dayName.classList.add("days-name__name");
            dayName.innerHTML = daysName[j];
            weekDays.appendChild(dayName);
        }
    }

    setNextMonth(){
        this.month += 1;
        if (this.month > 11) {
            this.month = 0;
            this.year += 1;
        }

        let monthName = document.querySelector(".month__name");
        monthName.innerHTML = this.months[this.month] + " " + this.year;
        this.drawMonthDays();
    }

    setPreviousMonth(){
        this.month -= 1;
        if (this.month < 0) {
            this.month = 11;
            this.year -= 1;
        }
        let monthName = document.querySelector(".month__name");
        monthName.innerHTML = this.months[this.month] + " " + this.year;
        this.drawMonthDays();
    }

}

let c = new Calendar(new Date());
c.draw();
