/**
 * Created by Junior Polygraphist on 09.07.2017.
 */

function changeText(id) {
    id.innerHTML = "Hi, I am Boris!";
    return id;
}

function getDate() {
    //   var y = document.getElementById("btn").onclick = getD();
    //   function getD() {
    //    }
    document.getElementById('ev_1').innerHTML = Date();

}

// check cookie
function checkCookie() {
    var x, text = "";
    if (navigator.cookieEnabled == true) {
        text = "Cookie is enabled!";
    } else {
        text = "Cookie is un enabled";
    }

    x = document.getElementById('ev_2');
    x.innerHTML = text;

}

function changeAllTextToUpperCase() {
    var x = document.getElementById('f_name');
    x.value = x.value.toUpperCase();
}

function mouseOvr(obj) {
    return obj.innerHTML = "Hello!"
}

function mouseOut(obj) {
    return obj.innerHTML = "Bye!";

}

function mouseDown(obj) {
    obj.style.backgroundColor = "#ea8573";
    return obj.innerHTML = "Click me!";
}

function mouseUp(obj) {
    obj.style.backgroundColor = "#49d284";
    return obj.innerHTML = "Thanks!";

}

function myMessage() {
    alert("That is the simple message!");
}

function setBackgroundColor(x) {
    x.style.backgroundColor = "#49d284";
    x.style.fontFamily = "Gabriola";
    x.style.fontSize = "24px";
}

/*
 function setDateViaListener() {
 document.getElementById('txt_date').innerHTML = Date();
 }
 */


function gamesWithMouse() {
    var x = document.getElementById("btn_1");
    x.addEventListener("mouseover", myFunction);
    x.addEventListener("click", mySecondFunction);
    x.addEventListener("mouseout", myThirdFunction);

    function myFunction() {
        var y = document.getElementById("ev_3");
        y.innerHTML = "Moused over!<br>";
    }

    function mySecondFunction() {
        document.getElementById("ev_3").innerHTML = "Clicked!" + "<br>";
        //  document.getElementById("demo").innerHTML = document.getElementById("demo").innerHTML + "Clicked!<br>";
    }

    function myThirdFunction() {
        document.getElementById("ev_3").innerHTML = "Moused out!<br>";
    }
}

/*function getRandomNumbers() {
 addEventListener("resize", function () {
 return document.getElementById("ev_4").innerHTML = Math.random();
 });
 }*/

function multiplaxRezult() {
    var p1 = 5;
    var p2 = 7;

    document.getElementById("btn_2").addEventListener("click", function () {
        myFunction(p1, p2);
    });

    function myFunction(a, b) {
        var result = a * b;
        document.getElementById("ev_5").innerHTML = result;
    }
}
