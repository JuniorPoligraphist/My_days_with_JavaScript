/**
 * Created by Junior Polygraphist on 09.07.2017.
 */

// var myTitle = document.getElementById("demo").firstChild.nodeValue;
// or like this (Accessing the first child)
//var myTitle = document.getElementById("demo").childNodes[0].nodeValue;

document.getElementById('n_2').innerHTML = document.getElementById('n_1').innerHTML;
document.getElementById('n_4').innerHTML = document.getElementById('n_3').firstChild.nodeValue;
document.getElementById('n_6').innerHTML = document.getElementById('n_5').childNodes[0].nodeValue;

alert(document.head.innerHTML);
alert(document.body.innerHTML);
alert(document.documentElement.innerHTML);

//document.getElementById('n_8').innerHTML = document.getElementById('n_7').nodeName;
document.getElementById('n_8').innerHTML = document.getElementById('n_7').nodeType;


// add Node element (like <p>)
var x = document.getElementById("par");

var parag = document.createElement('p');
var node = document.createTextNode("Nickelback 'When We Stand Together' ");

parag.appendChild(node);

var child = document.getElementById("p1");

//x.appendChild(parag);
// or
x.insertBefore(parag, child);

x.removeChild(child);

//x.replaceChild(parag, child);

var myCollection = document.getElementsByTagName("p");
document.getElementById("demo").innerHTML = "The innerHTML of the second paragraph is: " +
    myCollection[4].innerHTML.toUpperCase() + myCollection.length;


// set color all elements (with tag <p>)
function setColor() {
    var myCollection = document.getElementsByTagName("p");
    var i, l;
    l = myCollection.length;

    for (i = 0; i < l; i++) {
        myCollection[i].style.color = "#ff5f2c";
    }
}


var myNodelist = document.querySelectorAll("p");
document.getElementById("demo2").innerHTML = "The innerHTML of the second paragraph is: "
    + myNodelist[6].innerHTML.toUpperCase() + myNodelist.length;

function setColorAgain() {
    var myNodeList = document.querySelectorAll("h1");
    var i, len;

    len = myNodeList.length;

    for (i = 0; i < len; i++) {

        myNodeList[i].style.backgroundColor = "#bba7f6";
        myNodeList[i].style.fontFamily = "Colibri";
        myNodeList[i].style.fontSize = "20px";
    }
}