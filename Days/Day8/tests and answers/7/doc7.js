/**
 * Created by Junior Polygraphist on 12.07.2017.
 */

// task 7
function bind(fn, context) {
    return function () {
        return fn.apply(context, arguments)
    }
}

window.x = 1;
var ctx = {x: 2};

function testThis(a) {
    console.log("x=" + this.x + ", a=" + a);
}

console.log(testThis(100)); // x=1, a=100
var boundFunction = bind(testThis, ctx);
console.log(boundFunction(100)); // x=2, a= 100