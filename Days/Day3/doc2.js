/**
 * Created by Junior Polygraphist on 06.07.2017.
 */
function createArrays() {


    var cars = ["Saab", "Volvo", "BMW"];
    // convert arrays to String
    document.getElementById("arr1").innerHTML = cars.toString();

    // [0] is the first element in an array. [1] is the second. Array indexes start with 0.
    document.getElementById("arr2").innerHTML = cars[2];

    var person = {firstName: "John", lastName: "Doe", age: 46};
    // The length property is always one more than the highest array index.
    document.getElementById("arr3").innerHTML = person["lastName"] + "<br>" + cars.length;


    var fruits, fLen, text, i;

    fruits = ["Lemon", "Apple", "Banana", "Lime", "Papaya", "Watermelon", "Blueberry"];

    // add elements to array
    fruits.push("Orange", "Mandarin", "Grapefruit", "Kiwi", "Pineapple", "Cherry");
    fLen = fruits.length;
    text = "<ul>";

    for (i = 0; i < fLen; i++) {
        text += "<li>" + fruits[i] + "</li>";
    }
    text += "</ul>";
    document.getElementById("arr4").innerHTML = text;

    fruits[fruits.length] = "Strawberry";
    document.getElementById("arr5").innerHTML = fruits;


    var cars = ["Saab", "Volvo", "BMW"];
    cars[0] = "Opel";

    cars.pop(); // Removed the last elements of array ("BMW")
    cars.shift(); // Removed the first element of array ("Opel")
    cars.unshift("Tesla");
    document.getElementById("arr6").innerHTML = cars;

    document.getElementById("arr7").innerHTML = fruits.join(" vs. ");


    fruits.splice(2, 0, "Lemon", "Kiwi"); // Add 2 new element of fruits
    fruits.splice(0, 1);        // Removes the first element of fruits
    document.getElementById("arr8").innerHTML = fruits;

    var arr1 = ["Cecilie", "Lone"];
    var arr2 = ["Emil", "Tobias", "Linus"];
    var arr3 = ["Robin", "Morgan"];

    var myChildren = arr1.concat(arr2, arr3);

    document.getElementById("arr9").innerHTML = myChildren.toString();

    // Adding elements with high indexes can create undefined "holes" in an array:
    // JavaScript does not support arrays with named indexes.
    // In JavaScript, arrays always use numbered indexes.

    // Example
    var points = new Array();         // Bad
    var points = [];                  // Good
    typeof fruits;             // returns object

    //  Solution 1:
    //  To solve this problem ECMAScript 5 defines a new method Array.isArray():
    //  Array.isArray(fruits);     // returns true

    //  Solution 2:
    // fruits instanceof Array     // returns true
}

function sortArrays() {
    var fruits = ["Banana", "Orange", "Apple", "Mango", "Orange", "Mandarin", "Grapefruit", "Kiwi", "Pineapple", "Cherry"];
    document.getElementById("arr10").innerHTML = fruits;

    // The sort() method sorts an array alphabetically
    fruits.sort();
    document.getElementById("arr11").innerHTML = fruits;

    // The reserve() method reverses the elements in an array (in descending order)
    fruits.reverse();
    document.getElementById("arr12").innerHTML = fruits;


    // The Compare Function - function(a, b){return a-b}
    var points = [40, 20, 1, 5, 7, 30, 111, 0, 10, 35, 29, 100, -1];
    points.sort(function sortNumbers(a, b) {
        return a - b;
    });
    document.getElementById('arr13').innerHTML = points;

    points.sort(function sortNumbers(a, b) {
        return b - a;
    });
    document.getElementById('arr14').innerHTML = points;

    // get max value of array "points"
    function getArrayMax(arr) {
        return Math.max.apply(null, arr);
    }

    document.getElementById('arr15').innerHTML = getArrayMax(points);

    // get min value of array "points"
    function getArrayMin(arr) {
        return Math.min.apply(null, arr);
    }

    document.getElementById('arr16').innerHTML = getArrayMin(points);


}

function sortObjects() {
// sort objects
    var cars = [
        {type: "Volvo", year: 2016},
        {type: "Saab", year: 2001},
        {type: "BMW", year: 2010},
        {type: "Opel", year: 2009}];

    displayCars();

    function sortObj() {
        cars.sort(function srtObj(a, b) {
            return a.year - b.year
        });
        displayCars();
    }

    function displayCars() {
        document.getElementById("arr17").innerHTML =
            cars[0].type + " " + cars[0].year + "<br>" +
            cars[1].type + " " + cars[1].year + "<br>" +
            cars[2].type + " " + cars[2].year + "<br>" +
            cars[3].type + " " + cars[3].year;
    }
}
