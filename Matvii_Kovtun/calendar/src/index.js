import Calendar from "./Calendar";







let c = new Calendar(new Date(new Date().setMonth(4)));

let c1 = new Calendar(new Date(new Date().setMonth(5)));


// document.getElementsByClassName("Calendar").innerHTML += c.render(c.generateMonth(new Date( new Date().setMonth(3)) , 1));

c.render();
c1.render();

document.body.append(c.rootElement);
document.body.append(c1.rootElement);



// document.body.innerHTML = new Calendar().renderCalendar();


