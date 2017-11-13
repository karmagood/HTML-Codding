const calendar = document.querySelector(".calendar");
const days = calendar.querySelectorAll(".calendar__day");
const nodeLisToArray = (nodeList) => Array.prototype.slice.call(nodeList);

const daysArray = nodeLisToArray(days);

daysArray
    .filter ( (el, i) => i % 7 === 6 || i % 7 === 5)
.map( el => el.classList.add("calendar__day_active") );

const disabledDays = nodeLisToArray(calendar.querySelectorAll(".calendar__day_busy"));
disabledDays
    .map( el => el.classList.remove("calendar__day_busy"));

const today = (new Date()).getDate();
daysArray[today-1].classList.add("calendar__day_busy");

const getRandom = (from, to) => from + Math.floor(Math.random() * to);

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[getRandom(0, 16)];
    }
    return color;
};

const paint = (el) => el.style.backgroundColor = getRandomColor()

const delegate = (className) => (ev) => {
    if (ev.target.classList.contains(className)) { paint(ev.target); }
};

calendar.addEventListener("click", delegate("calendar__day"));
