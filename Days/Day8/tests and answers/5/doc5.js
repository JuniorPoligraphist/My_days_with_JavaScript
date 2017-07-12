/**
 * Created by Junior Polygraphist on 12.07.2017.
 */

// task 5
function partial(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();

    return function () {
        return fn.apply(null, args.concat(Array.prototype.slice.call(arguments)));
    }
}


function add(a, b) {
    return a + b;
}


function mult(a, b, c, d) {
    return a * b * c * d;
}

var add5 = partial(add, 5); // We got a function with 1 argument, which adds to any number 5

// output results
console.log(add5(2)); // 7
console.log(add5(10)); // 15
console.log(add5(8)); // 13

var mult23 = partial(mult, 2, 3); // we fixed the first 2 arguments mult() as 2 and 3

console.log(mult23(4, 5)); // 2*3*4*5 = 120
console.log(mult23(1, 1)); // 2*3*1*1 = 6