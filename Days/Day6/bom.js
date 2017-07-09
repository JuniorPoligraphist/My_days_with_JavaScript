/**
 * Created by Junior Polygraphist on 09.07.2017.
 */

// find the window browser height and width
// The example displays the browser window's height and width: (NOT including toolbars/scrollbars)
var w = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

var h = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

var x = document.getElementById("br_1");
x.innerHTML = "Browser inner window width: " + w + ", height: " + h + ".";

// window.close();

document.getElementById("br_2").innerHTML =
    "Screen width is " + screen.width + "<br>" +
    "Screen height is " + screen.height + "<br>" +
    "Screen avail (using) width is " + screen.availWidth + "<br>" +
    "Screen avail (using) height is " + screen.height + "<br>" +
    "Screen color depth is " + screen.colorDepth + "<br>" +
    "Screen pixel depth is " + screen.pixelDepth;


// The #rrggbb (rgb) values used in HTML represents "True Colors" (16,777,216 different colors)

// All modern computers use 24 bit or 32 bit hardware for color resolution:

// 24 bits =      16,777,216 different "True Colors"
// 32 bits = 4,294,967,296 different "Deep Colors"
// Older computers used 16 bits: 65,536 different "High Colors" resolution.

// Very old computers, and old cell phones used 8 bits: 256 different "VGA colors".

document.getElementById("br_3").innerHTML =
    "The full URL of this page is:<br>" + window.location.href + "<br>" +
    "Page hostname is " + window.location.hostname + "<br>" +
    "Page path is: " + window.location.pathname + "<br>" +
    "Port number is " + window.location.port + "<br>" +
    "Page protocol is " + window.location.protocol + "<br>";

function newDoc() {
    window.location.assign("https://facebook.com");
}

// Note: If the port number is default (80 for http and 443 for https), most browsers will display 0 or nothing.

function goBack() {
    window.history.back();
}

function goForward() {
    window.history.forward();
}


function closeWindow() {
    window.close();
}

document.getElementById('br_4').innerHTML = navigator.cookieEnabled + "<br>" +
    navigator.appCodeName + "<br>" + navigator.appName + "<br>" + navigator.platform + "<br>" +
    navigator.appVersion + "<br>" + navigator.language + "<br>" + navigator.onLine + "<br>" +
    navigator.javaEnabled() + "<br>" + navigator.userAgent;

function confirmButtons() {
    var text;
    if (confirm("Hi, I'm confirm box! \n Let's play!") == true) {
        text = "OK!";
    } else {
        text = "Cancel!";
    }
    document.getElementById('br_5').innerHTML = text;
}

function promptButtons() {
    var txt;
    var person = prompt("Enter your name:", "Nicola Tesla");
    if (person == null || person == "") {
        txt = "User cancelled the prompt.";
    } else {
        txt = "Hello " + person + "! How are you today?";
    }
    document.getElementById("br_6").innerHTML = txt;
}


// use setInterval() method
var myVar = setInterval(myTimer, 1000);

function myTimer() {
    var date = new Date();
    document.getElementById("br_7").innerHTML = date.toLocaleTimeString();
}

// create cookie
var c = document.cookie = "username=John Doe; cat=Garfield; path=/";