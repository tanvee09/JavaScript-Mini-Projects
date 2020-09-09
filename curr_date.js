var today = new Date();

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
console.log("Today's date is: " + today);