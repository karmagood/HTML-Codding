import {REGULAR_DAY, DAYS_AT_THE_WEEK, DAYS, MONTHS} from './consts';
import {DateTime} from 'luxon'
import {splitEvery} from 'ramda';

class Calendar {
    constructor(month, firstDay = 1) {
        this.rootElement = document.createElement("div");
        this.rootElement.classList.add("Calendar");
        this.firstDay = firstDay;
        this.month = DateTime.fromJSDate(month);
        this.days = this.generateMonth();
        this.setupDayClick();


    }

    renderHeader() {
        return `<button class="Calendar__button_prev">&lt;</button><h3 class=Calendar__month>${MONTHS[this.month.month - 1]}</h3><button class="Calendar__button_next">&gt;</button>
                <div class="Calendar__week-header"> ${DAYS.map((day, i) => `
                <span class="Calendar__day">${DAYS[(i + this.firstDay) % DAYS.length]}</span>`).join("")}</div>`


    }


    render() {
        this.rootElement.innerHTML = this.renderHeader(this.firstDay) + this.days.map(row => `
                <div class="Calendar__week">
                ${row.map(day => `
                      <span class="Calendar__day">
                       ${day || ""}</span>`).join("") }</div>
                                `).join("");
        this.setupButtonListeners();

    }


    generateMonth() {
        const numberOfDays = this.month.daysInMonth;
        let weekday = (DAYS.length - (this.firstDay - this.month.set({day: 1}).weekday)) % DAYS.length;
        return splitEvery(DAYS.length)
        ([
            ...Array(weekday).fill(), // "Prefix array"
            ...Array(numberOfDays).fill().map((el, i) => i + 1) // Calendar
        ])
    };

    setupButtonListeners() {
        let buttonPrev = this.rootElement.querySelector(".Calendar__button_prev");
        let buttonNext = this.rootElement.querySelector(".Calendar__button_next");

        buttonPrev.addEventListener("click", () => {
            this.month = this.month.plus({month: -1});
            console.log(this.month.month);
            this.days = this.generateMonth();
            this.render();
        });
        buttonNext.addEventListener("click", () => {
            this.month = this.month.plus({month: +1});
            console.log(this.month.month);
            this.days = this.generateMonth();
            this.render();
        });
    }

    setupDayClick() {
        this.rootElement.addEventListener('click', (event) => {
            let el = event.target;
            if (!el) return;

            if (el.classList.contains("Calendar__day")){
                el.classList.toggle("Calendar__day-busy");
            }



        })
    }


}


export default Calendar;
