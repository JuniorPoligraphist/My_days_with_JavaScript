/**
 * Created by Junior Polygraphist on 08.07.2017.
 */

// findElementsByTagName

function findElmByTgNm() {
    var x, y;

    x = document.getElementsByTagName("p");
    y = document.getElementById("dom_1");
    y.innerHTML = x["0"].innerHTML;

}

function findMyByClassNm() {
    var x, y;

    x = document.getElementsByClassName("intro");
    y = document.getElementById("dom_2");
    y.style.color = 'red';
    y.innerHTML = x[1].innerHTML;
}

function findElmByQrSel() {
    var x, y;

    x = document.querySelectorAll("p.intro");
    y = document.getElementById("dom_3");
    y.style.backgroundColor = "green";
    y.style.fontFamily = "Arial";
    y.innerHTML = x[0].innerHTML;
}

function findElmByObjCollections() {
    var i, x, y, text;
    text = " ";
    x = document.forms["frm"];

    for (i = 0; i < x.length; i++) {
        text += x.elements[i].value + "<br>";
    }

    y = document.getElementById("dom_4");
    y.style.color = "red";
    y.style.fontSize = "40px";
    y.innerHTML = text;
}

function countImages() {
    document.getElementById("dom").innerHTML = "Number of images: " + document.images.length;
    document.getElementById("dom_5").innerHTML = "Number of scripts: " + document.scripts.length;
}

function showAlertDialog() {
    alert(document.body.innerHTML);
    document.write(Date());
}

/*
 function changeImage() {
 document.getElementById("kiss").src = "2.gif";
 }*/

function myMove() {
    var elem = document.getElementById("animate");
    var pos = 0;
    var id = setInterval(frame, 10);

    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.bottom = pos + 'px';
        }
    }
}
