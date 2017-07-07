/**
 * Created by Junior Polygraphist on 07.07.2017.
 */

function rangeOverflow() {

    var txt = "";
    var x = document.getElementById("s1");

    if (x.validity.rangeOverflow) {
        txt = "Value too large";
    } else if (x.validity.rangeUnderflow) {
        txt = "Value to slow";
    } else if (x.validity.valueMissing) {
        txt = "Input is empty";
    } else {
        txt = "Input OK";
    }
    document.getElementById("s2").innerHTML = txt;
}