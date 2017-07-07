/**
 * Created by Junior Polygraphist on 07.07.2017.
 */


function getErrors() {
    "use strict";
    try {
        // aalert() instead of alert()
        aalert("Welcome!");
    } catch (error) {
        document.getElementById('err1').innerHTML = error.name + "<br>" + error.message;
    }

}

function checkNumbers() {
    // The "use strict" directive is only recognized at the beginning of a script or a function.
    "use strict";

    var x, message;

    try {
        message = document.getElementById('message');
        message.innerHTML = "";
        x = document.getElementById('err2').value;

        if (x == "") throw "is empty";
        if (isNaN(x)) throw "is not a number";
        x = Number(x);

        if (x < 5) throw "number is low!";
        if (x > 10) throw "number is high!";
        //      if (x => 5 && x <= 10) throw "number is OK!";
    } catch (err) {
        message.innerHTML = "Input " + err;
    }
        // Block of code to be executed regardless of the try / catch result
    finally {
        document.getElementById('err').value = "";
    }

    /* // Example JS Hoisting (variable 'e' hoisted to the top)
     e = 7; // Assign 7 to e

     elem = document.getElementById('err3'); // Find element
     elem.innerHTML = e; // Display element
     var e; // Declare e*/
}

// example 'undefined' value of
function myFunction(x, y) {
    if (y === undefined) {
        y = 0;
        document.getElementById("err4").innerHTML = myFunction(4);
    }
    return x * y;
}

// Example
//x = 5 + 7;      // x.valueOf() is 12, typeof x is a number
//x = 5 + "7";    // x.valueOf() is 57, typeof x is a string
//x = "5" + 7;    // x.valueOf() is 57, typeof x is a string
//x = 5 - 7;      // x.valueOf() is -2, typeof x is a number
//x = 5 - "7";    // x.valueOf() is -2, typeof x is a number
//x = "5" - 7;    // x.valueOf() is -2, typeof x is a number
//x = 5 - "x";    // x.valueOf() is NaN, typeof x is a number

// "Hello" - "Dolly"    // returns NaN

// JSON stands for JavaScript Object Notation
