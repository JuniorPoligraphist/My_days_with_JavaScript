/**
 * Created by Junior Polygraphist on 10.07.2017.
 */

/**
 *
 * Copyright © https://gist.github.com/MattSurabian/8867307
 * Thank you! It's a good test!
 *
 **/

// Ok, let's start a tests
// #1
var x = function x() {
    console.log(x === x);
};
x(); //Return true


// #2
function artX() {
    return {test: 1};
}
alert(typeof artX()); // Return object


// #3
Number("1") - 1 == 0; // Return true (result "1" - 1 = 0)


// #4
(true + false) > 2 + true; // Return false (true = 1 and false = 0)
// (1 + 0) > 2 + 1
// (1 > 3 - false)


// #5
function bar() {
    return foo;
    foo = 10;
    function foo() {
    }

    var foo = '11';
}
bar();
alert(typeof bar()); // Return function

// #6
"1" - -"1"; // Return 2
// 1 -- 1  = 2 (minus and minus give the plus)
// (1 - (-1) => 1+1 = 2)


// #7
var x = 3;

var foo = {
    x: 2, baz: {
        x: 1, bar: function () {
            return this.x;
        }
    }
};

var go = foo.baz.bar; // Return 2 alerts
alert(go()); // return 3
alert(foo.baz.bar()); // return 1


// #8
new String("This is a string") instanceof String; // Return true


// #9
[] + [] + 'foo'.split(''); // Return "f,o,o"


// #10
new Array(5).toString(); // Return ",,,,"

// #11
var myArr = ['foo', 'bar', 'baz'];
myArr.length = 0;
myArr.push('bin');
console.log(myArr);

// #12
new String('Hello') === 'Hello'; // Return false
// because 1-st is an Object, 2-nd is a String

// #13
var x = 0;
function foo() {
    x++;
    this.x = x;
    return foo;
}
var bar = new new foo;
console.log(bar.x); // Return undefined

// #14
"This is a string" instanceof String; // Return false


// #15
var bar = 1,
    foo = {};

foo:{
    bar: 2;
    baz: ++bar;
}
;

foo.baz + foo.bar + bar; // Return NaN
isNaN(foo.baz + foo.bar + bar); // Return true


// #16
var myArr = ['foo', 'bar', 'baz'];
myArr[2];
console.log(myArr[2]); // Return "baz"
console.log('2' in myArr); // Return true

// structure of "myArr"
/*{
 '0': 'foo',
 '1': 'bar',
 '2': 'baz'
 }*/


// #17
var arr = [];
arr[0] = 'a';
arr[1] = 'b';
arr.foo = 'c';
alert(arr.length); // Return 2


// #18
10 > 9 > 8 === true; // Return false
// true is 1
// 1 > 8 // Return false


// #19
function foo(a, b) {
    arguments[0] = 2;
    alert(b);
}
foo(1); // Return undefined


// #20
NaN === NaN; // Return false