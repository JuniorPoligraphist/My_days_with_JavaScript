/**
 * Created by Junior Polygraphist on 06.07.2017.
 */

function createList() {
    var cars = ["BMW", "Volvo", "Saab", "Ford"];
    var text = "";

    // A code block is a block of code between { and }.
    list: {
        text += cars[0] + "<br>";
        text += cars[1] + "<br>";
        text += cars[2] + "<br>";
        break list;
        text += cars[3] + "<br>";
        text += cars[4] + "<br>";
        text += cars[5] + "<br>";
    }
    document.getElementById("list").innerHTML = text;
}

function getConstructorOfFunctions() {
    document.getElementById("const").innerHTML =
        "john".constructor + "<br>" +       // Returns function String()
        (3.14).constructor + "<br>" +       // Returns function Number()
        false.constructor + "<br>" +        // Returns function Boolean()
        [1, 2, 3, 4].constructor + "<br>" +     // Returns function Array()
        {name: 'john', age: 34}.constructor + "<br>" +      // Returns function Object()
        new Date().constructor + "<br>" +       // Returns function Date()
        function () {
        }.constructor;      // Returns function Function()
}
// You cannot use typeof to determine if a JavaScript object is an array (or a date).

// Examples
5 + null    // returns 5         because null is converted to 0
"5" + null  // returns "5null"   because null is converted to "null"
"5" + 2     // returns 52        because 2 is converted to "2"
"5" - 2     // returns 3         because "5" is converted to 5
"5" * "2"   // returns 10        because "5" and "2" are converted to 5 and 2