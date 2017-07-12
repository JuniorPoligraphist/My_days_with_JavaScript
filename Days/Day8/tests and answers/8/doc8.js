/**
 * Created by Junior Polygraphist on 12.07.2017.
 */

// task 8
function pluck(objects, fieldName) {
    var arr = [];

    for (var i = 0; i < objects.length; i++) {
        arr.push(objects[i][fieldName]);
    }
    return arr;
}


var characters = [
    {'name': 'barney', 'age': 36},
    {'name': 'fred', 'age': 40}
];

console.log(pluck(characters, 'name')); // ['barney', 'fred']