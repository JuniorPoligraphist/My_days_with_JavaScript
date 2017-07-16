/**
 * Created by Junior Polygraphist on 15.07.2017.
 */


var newItemCounter = 1;
var ourList = document.querySelector("#our-list");
var ourButton = document.getElementById("our-button");
var ourHeadline = document.getElementById("our-headline");
//var listItems = document.getElementById("our-list").getElementsByTagName("li");
var listItems = document.querySelectorAll("#our-list li");

/*for (var i = 0; i < listItems.length; i++) {
 // listItems[i].innerHTML = "Hello World";
 listItems[i].addEventListener("click", activateItem);
 }*/

ourList.addEventListener("click", activateItem);


function activateItem(p) {
    if (p.target.nodeName == "LI") {
        //  alert("Click detect item");
        //  ourHeadline.innerHTML = this.innerHTML;
        ourHeadline.innerHTML = p.target.innerHTML;

        for (var i = 0; i < p.target.parentNode.children.length; i++) {
            p.target.parentNode.children[i].classList.add("active");
        }

        // add css class for background color items
        p.target.classList.add("active");
        // this.classList.add("active");
    }
}

ourButton.addEventListener("click", addNewItem);

function addNewItem() {
    ourList.innerHTML += "<li> Something new! " + newItemCounter + "</li>";
    newItemCounter++;

}