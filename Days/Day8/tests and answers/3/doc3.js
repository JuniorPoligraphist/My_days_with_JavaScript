/**
 * Created by Junior Polygraphist on 12.07.2017.
 */

// task 3
function map(fn, array) {
    var newArray = [];

    for (var i = 0; i < array.length; i++) {
        newArray.push(fn(array[i]));
    }
    return newArray;
}


function square(x) {
    return x * x;    // getting the root square
}
console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(map(square, [])); // []

var arr = [1, 2, 3];
console.log(map(square, arr)); // [1, 4, 9]
console.log(arr); // [1, 2, 3]