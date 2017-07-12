/**
 * Created by Junior Polygraphist on 12.07.2017.
 */

// task 4
function fmap(a, gen) {
    function generateNum() {
        return a(gen.apply(null, arguments));
    }

    return generateNum;
}


var gen = sequence(1, 1);
function square(x) {
    return Math.sqrt(x);
}
var squareGen = fmap(square, gen);

console.log(squareGen()); // 1
console.log(squareGen()); // 4
console.log(squareGen()); // 9
console.log(squareGen()); // 16


function add(a, b) {
    return a + b;
}

// We get a new function that calls 'add', and the result passes through the function 'square'
// in single quotes I wrote function names
var squareAdd = fmap(square, add);
console.log(squareAdd(2, 3)); // 25 = (2 + 3) ^ 2
console.log(squareAdd(5, 7)); // 144 = (5 + 7) ^ 2


// task 1 must have in this doc
// because we call the function sequence()
function sequence(start, step) {
    var called;
    start = start || 0;
    step = step || 1;

    return function () {
        if (called) {
            start += step;
        }
        called = true;
        return start;
    }
}