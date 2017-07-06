/**
 * Created by Junior Polygraphist on 06.07.2017.
 */

// JavaScript counts months from 0 to 11. January is 0. December is 11.
function getDateViaNumbers() {
    var a = new Date();
    document.getElementById('date').innerHTML = a.toDateString();

    // new Date(year, month, day, hours, minutes, seconds, milliseconds)
    var d = new Date(2017, 11, 12, 13, 45, 10, 0); // Return Tue, 12 Dec 2017 11:45:10 GMT
    document.getElementById('date1').innerHTML = d.toUTCString();

    document.getElementById('date2').innerHTML = a.getFullYear() + " Year" + "<br>";
    document.getElementById('date3').innerHTML = a.getDate() + " Date" + "<br>";
    document.getElementById('date4').innerHTML = a.getDay() + " Day" + "<br>";
    document.getElementById('date4').innerHTML = a.getMonth() + " Month" + "<br>";
    document.getElementById('date5').innerHTML = a.getHours() + " Hours" + "<br>";
    document.getElementById('date6').innerHTML = a.getMinutes() + " Minutes" + "<br>";
    document.getElementById('date7').innerHTML = a.getSeconds() + " Seconds" + "<br>";
    document.getElementById('date8').innerHTML = a.getMilliseconds() + " Milliseconds" + "<br>";

    // and get time in milliseconds format
    document.getElementById('date9').innerHTML = a.getTime() + " Time in milliseconds" + "<br>";

    //In JavaScript, the first day of the week (0) means "Sunday",
    // even if some countries in the world consider the first day of the week to be "Monday"

    var daysOfWeek = ["Sunday", " Monday", " Tuesday", " Wednesday", " Thursday", " Friday", " Saturday"];
    if (daysOfWeek) {
        document.getElementById('date10').innerHTML = daysOfWeek.toString();
        document.getElementById("date11").innerHTML = daysOfWeek[d.getDay()] + " - is a day now!";
    }

    var foo = new Date();
    var bar = 50;
    // If adding days, shifts the month or year, the changes are handled automatically by the Date object.
    foo.setDate(foo.getDate() + bar);
    document.getElementById("date12").innerHTML = foo.toUTCString();


    var today, someday, text;
    today = new Date();
    someday = new Date("2017, 11, 31");
    text = "";

    if (today < someday) {
        text = "Today is  Dec 11 2017";
    } else {
        text = "Today is " + today;
    }
    document.getElementById('date13').innerHTML = text;
}

