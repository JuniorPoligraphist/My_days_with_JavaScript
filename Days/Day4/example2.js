/**
 * Created by Junior Polygraphist on 07.07.2017.
 */

// JSON is a format for storing and transporting data.
// JSON is often used when data is sent from a server to a web page.

function convertJSONTextToJavaScriptObject() {
    var text, obj;

    text = '{ "employees" : [' +
        '{ "firstName":"John" , "lastName":"Doe" },' +
        '{ "firstName":"Anna" , "lastName":"Smith" },' +
        '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

    // use JSON.parse()
    obj = JSON.parse(text);

    document.getElementById('json').innerHTML =
        obj.employees[1].firstName + " " + obj.employees[1].lastName;

}

function validateFormStatus() {
    var x = document.forms["myForm"]["frame"].value;

    if (x == "") {
        alert("Name must ne filled out");
        return false;
    }
}

function inputNumbers() {
    var x, text;
    x = document.getElementById("numb").value;

    if (isNaN(x) || x < 1 || x > 10) {
        text = "Input not valid!";
    } else {
        text = "Input OK!";
    }
    document.getElementById("demo").innerHTML = text;
}

function inputObjects() {
    var inpObjects = document.getElementById("inp");
    if (inpObjects.checkValidity() == false) {
        document.getElementById('inp2').innerHTML = inpObjects.validationMessage;
    } else {
        document.getElementById("inp2").innerHTML = "Input Ok!";
    }
}