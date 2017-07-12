/**
 * Created by Junior Polygraphist on 12.07.2017.
 */

// task 6
function partialAny(fn) {
    var args = Array.prototype.slice.call(arguments);
    var fn = args.shift();

    return function () {
        var list = Array.prototype.slice.call(arguments);
        var newList = [];

        for (var i = 0; i < args.length; i++) {
            if (args[i] === undefined && list.length > 0) {
                newList.push(list.shift());
            } else {
                newList.push(args[i]);
            }
        }
        return fn.apply(null, newList.concat(list));
    }
}


function test(a, b, c) {
    return 'a=' + a + ',b=' + b + ',c=' + c;
}

var test1_3 = partialAny(test, 1, undefined, 3);
console.log(test1_3(5)); // a=1,b=5,c=3