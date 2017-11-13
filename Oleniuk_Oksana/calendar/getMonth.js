//
// var monthNames = ["January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
// ];
// var d = new Date();
// var output = monthNames[d.getMonth()] + " , "+d.getUTCDate();
// document.getElementById("getMonth").innerHTML = output;


var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
var d = new Date();
var currentMonthDigit = d.getMonth();
var output = monthNames[d.getMonth()];
document.getElementById("getMonth").innerHTML = output;
// ?
var box = document.getElementById("getMonth");


document.getElementById('buttons').addEventListener('click', function (evt) {
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    var target = evt.target;
    var d = new Date();
    if (target.id === 'monthNext') {
        if (currentMonthDigit >= 11) {
            currentMonthDigit = -1;
        }
        currentMonthDigit = currentMonthDigit + 1;
        var output = monthNames[currentMonthDigit];
        document.getElementById("getMonth").innerHTML = output;
    } else if (target.id === 'monthPrevious') {
        if (currentMonthDigit <= 0) {
            currentMonthDigit = 12;
        }
        currentMonthDigit = currentMonthDigit - 1;
        var output = monthNames[currentMonthDigit];
        document.getElementById("getMonth").innerHTML = output;
    }
}, false);
