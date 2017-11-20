import Calendar from "./Calendar";







let c = new Calendar();




// document.getElementsByClassName("Calendar").innerHTML += c.render(c.generateMonth(new Date( new Date().setMonth(3)) , 1));

document.body.innerHTML += c.render(c.generateMonth(new Date( new Date().setMonth(3)) , 1));





// document.body.innerHTML = new Calendar().renderCalendar();


