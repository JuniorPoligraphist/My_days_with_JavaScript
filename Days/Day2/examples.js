/**
 * Created by Junior Polygraphist on 05.07.2017.
 */

// Integers (numbers without a period or exponent notation) are considered accurate up to 15 digits.
function checkIntegers() {
    var x = 999999999999999; // x will be 999999999999999
    var y = 9999999999999999; // y will be 10000000000000000
    document.getElementById("num1").innerHTML = x + "<br>" + y;
}

// The maximum number of decimals is 17, but floating point arithmetic is not always 100% accurate:
function getExactSum() {
    var x = 0.2 + 0.1; // x will be 0.30000000000000004
    var y = (0.2 * 10 + 0.1 * 10) / 10; // x will be 0.3
    document.getElementById("num2").innerHTML = "0.2 + 0.1 = " + x;
    document.getElementById("num3").innerHTML = "(0.2*10 + 0.1*10) / 10 = " + y;
    document.getElementById("num4").innerHTML = "0xAA = " + 0xAA; // Return 170
}

// You can use the toString() method to output numbers  as base 16 (hex), base 8 (octal), or base 2 (binary).
function convertNumbers() {
    var number = 128; // base 10 (dec) - default in JavaScript

    var a = number.toString(16); // base 16 (hex)
    var b = number.toString(8); // base 8 (oct)
    var c = number.toString(2); // base 2 (bin)

    document.getElementById('num5').innerHTML =
        number + " Decimal" + "<br>" +
        a + " Hexadecimal" + "<br>" +
        b + " Octal" + "<br>" +
        c + " Binary";
}

// Infinity (or -Infinity) is the value JavaScript will return  if you calculate a number outside the largest possible number.
function getLargestPossibleNumber() {
    var num = 2;
    var txt = "";

    // use the "while" loop
    while (num != Infinity) {
        num *= num;
        txt = txt + num + "<br>";
    }
    document.getElementById('num6').innerHTML = txt;
}
// Division by 0 (zero) also generates Infinity:
function divisionByZero() {
    var x = 2 / 0; // x will be Infinity
    var y = -2 / 0; // y will be -Infinity
    document.getElementById("num7").innerHTML = x + "<br>" + y;
}

// toFixed(2) is perfect for working with money.
function workingWithNumbers() {
    var x = 9.656;
    document.getElementById("num8").innerHTML =
        x.toFixed(0) + "<br>" +
        x.toFixed(2) + "<br>" +
        x.toFixed(4) + "<br>" +
        x.toFixed(20);
}

// Used on Date(), the Number() method returns the number of milliseconds since 1.1.1970.
function parseNumbers() {
    var x = "10 6";
    document.getElementById("num9").innerHTML =
        parseInt("10") + "<br>" +
        parseInt("0.333333333") + "<br>" +
        parseInt(x) + "<br>" +
        parseInt("125 years") + "<br>" +
        parseInt("years 15") + "<br>" + isNaN(x) + "<br>";

    // use parseFloat
    document.getElementById("num10").innerHTML =
        parseFloat("10") + "<br>" +
        parseFloat("10.33333") + "<br>" +
        parseFloat(x) + "<br>" +
        parseFloat("11 years") + "<br>" +
        parseFloat("years 100");
}

// Angle in radians = Angle in degrees x PI / 180.
function degreesToRadians() {
    var g = Math.sin(90 * Math.PI / 180); // Return 1  (the sine of 90 degrees)

    document.getElementById('num11').innerHTML = g;
}

// Example Math Properties (Constants)
var array =
    [
        Math.E,      // returns Euler's number
        Math.PI,     // returns PI
        Math.SQRT2,   // returns the square root of 2
        Math.SQRT1_2, // returns the square root of 1/2
        Math.LN2,  // returns the natural logarithm of 2
        Math.LN10,  // returns the natural logarithm of 10
        Math.LOG2E,  // returns base 2 logarithm of E
        Math.LOG10E // returns base 10 logarithm of E
    ];

// Math.random() always returns a number lower than 1.