/**
 * Created by Junior Polygraphist on 08.07.2017.
 */

// JS Objects Methods

function defineObjectMethods() {

    // declare and define variables
    var person = {
        firstName: "John",
        lastName: "Doe",
        id: 5566,
        fullName: function () {
            return person.firstName + " " + person.lastName;
            // or with keyword 'this'
            //  return this.firstName + " " + this.lastName;
        }
    };

    var x = document.getElementById('obj_m');
    x.innerHTML = person.fullName();
}

function changePropertiesViaFunction() {
    function person(firstName, lastName, age, eyeColor, cat) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.eyeColor = eyeColor;
        this.cat = cat;

        this.changeName = function (name) {
            this.lastName = name;
        };
        this.takeSelphie = function (cat) {
            this.cat = cat;
        }
    }

    var friend_1 = new person("Carl", "Kendrik", 32, "blue", "Lucas");
    var friend_2 = new person("Emma", "Seldon", 29, "green", null);


    // define methods
    friend_2.changeName("Kendrick-Seldon");
    friend_2.takeSelphie("Marta");

    var x = document.getElementById('obj_f');
    x.innerHTML = "Hi! My friend " + friend_1.firstName + " has a cat " + friend_1.cat + "<br>" +
        "And my friend " + friend_2.firstName +
        " has the mother's lastname is " + friend_2.lastName +
        ". And she has a cat (she likes a selphie with cats) " + friend_2.cat;
}

function getAgeToParents() {

    var x;

    function Person(first, last, age, eye) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eye;
    }

    var myFather = new Person("John", "Doe", 50, "blue");
    var myMother = new Person("Sally", "Rally", 48, "green");

    myFather.name = function () {
        return this.firstName + " " + this.lastName;
    };

    // add properties to objects using keyword 'prototype'
    Person.prototype.favColor = "Red";


    // add methods to objects using 'prototype'
    Person.prototype.name = function () {
        return this.firstName + " " + this.lastName
    };

    x = document.getElementById("obj_4");
    x.innerHTML = "My father is " + myFather.age + ". My mother is " + myMother.age + "<br>" +
        "My father is " + myFather.name() + "<br>" + myMother.favColor + "<br>" +
        "My father is " + myMother.name();
}

