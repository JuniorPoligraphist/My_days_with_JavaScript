/**
 * Created by Junior Polygraphist on 08.07.2017.
 */
function invokeTheFunction() {
    function getRez(a, b) {
        return a * b;
    }

    document.getElementById("fn_10").innerHTML = getRez(4, 7);

    // using 'this' in function
    function getObjectWindow() {
        return this;    // Will return the window object
    }

    document.getElementById("fn_11").innerHTML = getObjectWindow();
}

function getObjectObject() {
    var myObject = {
        firstName: "John",
        lastName: "Doe",
        fullName: function () {
            return this;
        }
    };
    document.getElementById("fn_12").innerHTML = myObject.fullName();   // Return Object object
}

function getArgumentsOfFunctionViaConstructor() {

    var x, y, z, i, text_x, text_y;
    text_x = "";
    text_y = "";

    function getArguments(arg1, arg2, arg3) {
        this.firstName = arg1;
        this.lastName = arg2;
        this.age = arg3;
    }

    x = new getArguments("John", "Alexandros", 21);
    y = new getArguments("Lina", "Denser", 20);


    // create two for/in loops
    for (i in x) {
        text_x += x[i] + " ";
    }

    for (i in y) {
        text_y += y[i] + " ";
    }

    z = document.getElementById('fn_13');
    z.innerHTML = text_x + "<br>" + text_y;

    //  z.innerHTML = y.lastName + x.age;

    //  Return the last arg3 - age
    //  z.innerHTML = x[i] + "<br>" + y[i];
}

function getFullName() {
    // create 2 objects
    var x = {
        firstName: "Ivan",
        lastName: "Romanov",
        eyeColor: "blue",
        aboutMe: function () {
            return x.firstName + " " + x.lastName + " " + x.eyeColor;
        }
    };

    var y = {firstName: "Sasha", lastName: "Ionov", eyeColor: "brown"};

    //   call() takes any function arguments separately.
    document.getElementById('fn_14').innerHTML = x.aboutMe.call(y);
}

// ok, let's using the apply() method instead call()
function getAnotherFullName() {
    // create 2 objects
    var x = {
        firstName: "Ivan",
        lastName: "Romanov",
        eyeColor: "blue",
        aboutMe: function () {
            return x.firstName + " " + x.lastName + " " + x.eyeColor;
        }
    };

    var y = {firstName: "Sasha", lastName: "Ionov", eyeColor: "brown"};

    //   apply() takes any function arguments as an array.
    document.getElementById('fn_15').innerHTML = x.aboutMe.apply(y);

    // using Math.max() for array
    var arr = [2, 42, 62, 9, 12, 43];
    document.getElementById('fn_16').innerHTML = Math.max.apply(null, arr);
}

var count = 0;

function add() {
    return count += 1;
}

function addNewNumbers() {
    document.getElementById('fn_17').innerHTML = add();
}

// JS functions closures
var addNums = (function () {
    var counter = 0;

    return function () {
        return counter += 1;
    }
})
();
// A closure is a function having access to the parent scope, even after the parent function has closed.
function closureCounter() {
    document.getElementById('fn_18').innerHTML = addNums();
}