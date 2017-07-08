/**
 * Created by Junior Polygraphist on 08.07.2017.
 */

//A JavaScript object is a collection of named values
function createObjects() {
    var x;
    // create object using constructor
    function person(first, last, age, eye, cat) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eye;
        this.cat = cat;
    }

    var myFather = new person("John", "Doe", 50, "blue", null);
    var myMother = new person("Sally", "Rally", 48, "green", null);
    var mySister = new person("Sara", "Limbs", 11, "brown", "Garfield");


    x = document.getElementById("obj1");
    x.innerHTML =
        "My father is " + myFather.age + "." + "<br>" +
        "My mother is " + myMother.age + "." + "<br>" +
        "My sister is " + mySister.age + "." + "<br>" +
        "She has cat " + mySister.cat + ".";
}

function mutableObjects() {
    var person = {firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue", cat: "Garfield"};

    var y = person;
    y.age = 10;
    y.cat = "George";

    z = document.getElementById("obj2");
    z.innerHTML =
        person["firstName"] + " is " +
        person["age"] + " years old." + "<br>" +
        "He has a cat " + person["cat"];
}

function printAllPropertiesInObjects() {

    // declare variables
    var input, x, text_s, text_r, text_t;

    text_t = "";
    text_s = "";
    text_r = "";

    // create function
    // create constructor with params
    function student(name, surname, age, stipend) {
        this.studentName = name;
        this.stdentLastName = surname;
        this.studentAge = age;
        this.studentStipend = stipend;
    }

    // create variables
    var s = new student("Nick", "Samba", 19, true);
    var t = new student("Lina", "Rabel", 22, true);
    var r = new student("Sean", "Zapartia", 21, false);


    // give(add) the object params (properties)
    s.nation = "USA";
    t.nation = "Qatar";
    r.nation = "Sweden";


    // delete the object params (properties)
    delete s.studentStipend;
    delete t.studentStipend;
    delete r.studentStipend;


    // create three for/in loops
    for (x in s) {
        text_s += s[x] + " ";
    }

    for (x in r) {
        text_r += r[x] + " ";
    }

    for (x in t) {
        text_t += t[x] + " ";
    }

    // input results
    input = document.getElementById('obj3');
    input.innerHTML = text_s + "<br>" + text_t + "<br>" + text_r;
}
