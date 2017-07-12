/**
 * Created by Junior Polygraphist on 12.07.2017.
 */

// task 9
function filter(arr, fn) {
    var newArray = [];
    var i;
    for (i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            newArray.push(arr[i]);
        }
    }

    return newArray;
}

var input = [1, 2, 3, 4, 5, 6];

function isEven(x) {
    return x % 2 == 0;  // checks for parity
}

console.log(filter(input, isEven)); // [2, 4, 6]
console.log(input); // [1, 2, 3, 4, 5, 6]