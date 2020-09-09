var today = new Date();

var daynum = today.getDay();
var day;

switch(daynum) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
}

var hr = today.getHours();
var min = today.getMinutes();
var sec = today.getSeconds();

var timeNow = hr + ":" + min + ":" + sec;

var dd = today.getDate();
var mm = today.getMonth() + 1; // getMonth() gives number of months elapsed till then
var yy = today.getFullYear();

if (dd < 10) {
    dd = '0' + dd;
}

if (mm < 10) {
    mm = '0' + mm;
}

today = dd + '/' + mm + '/' + yy;

console.log("Date:  " + today);
console.log("Day:   " + day);
console.log("Time:  " + timeNow);