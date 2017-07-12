/**
 * Created by Junior Polygraphist on 12.07.2017.
 */

// task 1 must have in this doc
// because we call the function sequence()
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


// task 2
function take(fn, count) {
    var arr = [];

    for (var i = 0; i < count; i++) {
        arr[i] = fn();
    }
    return arr;
}

var gen2 = sequence(0, 2);
console.log(take(gen2, 5)); // [0, 2, 4, 6, 8 ]