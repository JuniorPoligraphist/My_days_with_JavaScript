/**
 * Created by Junior Polygraphist on 12.07.2017.
 */

// test 1
function sequence(start, step) {
    var invoked;
    start = start || 0;
    step = step || 1;

    return function () {
        if (invoked) {
            start += step;
        }
        invoked = true;
        return start;
    }
}


// create 3 generators
var generator = sequence(10, 3);
var generator2 = sequence(7, 1);
var generator3 = sequence(-2, 2);

// output results
console.log(generator()); // 10
console.log(generator()); // 13

console.log(generator2()); // 7
console.log(generator()); // 16
console.log(generator2()); // 8

console.log(generator3()); // -2
console.log(generator3()); // 0