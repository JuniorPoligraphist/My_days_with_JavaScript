/**
 * Created by Junior Polygraphist on 06.07.2017.
 */

function getBoolean() {
    var x = Boolean(233);
    var y = Boolean(false);
    var z = Boolean("");

    document.getElementById("bool1").innerHTML = x.toString();
    document.getElementById("bool2").innerHTML = y;
    document.getElementById("bool3").innerHTML = typeof z;
}

// JavaScript also contains a conditional operator that
// assigns a value to a variable based on some condition.

// use the Ternary operator
function checkAge() {
    var age, vote;

    age = document.getElementById('age').value;
    vote = (age <= 18) ? "To young" : "To old";

    document.getElementById('bool4').innerHTML = vote + " for voting!";
}

function getHours() {
    if (new Date().getHours() <= 18) {
        document.getElementById('bool5').innerHTML = "Good day!";
    } else {
        document.getElementById('bool5').innerHTML = "Good evening!";
    }
}

// Note that if is in lowercase letters. Uppercase letters (If or IF) will generate a JavaScript error.

function getDay() {
    var day;
    switch (new Date().getDay()) {
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
        case 7:
            day = "Sunday";
            break;

        default:
            day = "Unknown day";
            break;
    }

    document.getElementById('day').innerHTML = "Today is a " + day;
}

function getFruitsList() {
    var text, i, fLen;
    var fruits = ["Banana", "Orange", "Apple", "Mango", "Orange", "Mandarin", "Grapefruit", "Kiwi", "Pineapple", "Cherry"];

    text = "";
    fLen = fruits.length;

    for (i = 0; i < fLen; i++) {
        text += "<li>" + fruits[i] + "</li>";
    }
    document.getElementById('cars').innerHTML = text;
}

function getObject() {
    var person = {name: "Nick", surname: "Sterling", age: 22, cat: null};
    var x, text;


    text = "";
    // use the "for/in" loop
    for (x in person) {
        text += person[x] + " ";
    }

    document.getElementById('object').innerHTML = text;
}

function outputNumbers() {
    var i, text;
    text = "";
    i = 0;

    /* for (i = 0; i < 10; i++) {
     document.getElementById("num").innerHTML += "Loop 1:" + i + "<br>";
     }*/

    /* // another loop
     for (i = 1; i <= 9; i += 2) {
     // use keyword "continue"
     if (i === 3) {
     continue;
     }

     text += "Loop 2:" + i + "<br>";
     }
     document.getElementById('num1').innerHTML = text;*/

    do {
        text += "<br>Loop 3: " + i;
        i++;

    } while (i < 10);

    document.getElementById("num2").innerHTML = text;
}
// If you forget to increase the variable used in the condition, the loop will never end. This will crash your browser.