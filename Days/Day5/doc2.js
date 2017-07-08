/**
 * Created by Junior Polygraphist on 08.07.2017.
 */

// Syntax of JS Functions

/*function functionName(parameters) {
 code to be executed
 }*/

function yetAnotherFunction() {

    // that is anonymous function (a function without a name).
    var x = function (a, b) {
        return a * b
    };
    document.getElementById("fn_1").innerHTML = x(4, 3);
}

function exampleFunctionWithConstructor() {
    // using constructor functions
    var x = Function("a", "b", "return a - b");

    var y = document.getElementById('fn_2');
    //  y.innerHTML = x; // Return function anonymous(a,b /*``*/) { return a - b }
    y.innerHTML = x(4, 2);
}

// self-invoking functions (function invoked automatically)
// example of anonymous self-invoking functions (without a function name, automatically invoked)
(function () {
    var x = document.getElementById('fn_3');
    x.innerHTML = "Hello mazafaka!";
})
();

function notAnonymousFunction() {
    function getRez(a, b) {
        return a * b;
    }

    var x = getRez(4, 3) * 2;
    document.getElementById("fn_4").innerHTML = "Result a*b is: " + x;

    function getResult(a, b, c, d, e, f, g, h, i) {
        return arguments.length * 10;
    }

    var y = document.getElementById("fn_5");
    // write somebody numbers because that main is a 'argument.length'
    // length equal to 9
    // 9 * 10 = 90
    y.innerHTML = getResult(4, 32, 500, 10, 555, 3456, 0, -1, 2) + " is the result!";

    var z = document.getElementById('fn_6');
    z.innerHTML = notAnonymousFunction.toString();
}

// A function defined as the property of an object, is called a method to the object.
// A function designed to create new objects, is called an object constructor.


function newGoodFunction() {
    var x;

    // called undefined function (function without params)
    function undefinedFunction() {
        // without params
    }

    x = document.getElementById('fn_7');
    x.innerHTML = undefinedFunction();     // Return undefined
}

// find the largest number of list using function
function getLargestNumber() {
    var y;

    // list
    var x = findLargestNumber(4, 6, 788, 222, 88, 444, 11, -3, 222, 1);

    // find the largest number
    function findLargestNumber() {
        var i, max;
        max = -Infinity;
        for (i = 0; i < arguments.length; i++) {
            if (max < arguments[i]) {
                max = arguments[i];
            }
        }
        return max;
    }

    y = document.getElementById('fn_8');
    y.innerHTML = x;


    // find sum all numbers
    function sumAllNumbers() {
        var i, sum;
        sum = 0;
        for (i = 0; i < arguments.length; i++) {
            sum = sum + arguments[i];
        }
        return sum;
    }

    document.getElementById('fn_9').innerHTML = sumAllNumbers(44, 66, 1);
}
