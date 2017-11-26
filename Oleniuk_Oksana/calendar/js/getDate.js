var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
var dayList = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

var dateObj = new Date();
var day = dateObj.getUTCDate();

// var year = dateObj.getUTCFullYear();
var weekDay = dayList[dateObj.getDay()];
var month = monthNames[dateObj.getMonth()];


newdate = weekDay + " , " + month + " " + day;
document.getElementById("getDate").innerHTML = newdate;

