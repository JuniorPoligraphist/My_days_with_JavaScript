/**
 * Created by Junior Polygraphist on 12.07.2017.
 */

// task 10
function count(obj) {
    var i = 0;
    var pr;

    for (pr in obj) {
        i++;
    }
    return i;
}

var a = {a: 1, b: 2};
console.log(count(a)); // 2

var b = function () {
};

console.log(count(b)); // 0
var c = [1, 2, 3];
console.log(count(c)); // 3
var d = [];
d[100] = 1;
console.log(count(d)); // 1