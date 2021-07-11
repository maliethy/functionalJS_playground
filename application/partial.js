Function.prototype.partial = function () {
  var fn = this,
    args = Array.prototype.slice.call(arguments);
  console.log(fn, args); //[Function: abc] [ undefined, 'b', undefined ]
  return function () {
    var arg = 0;
    for (var i = 0; i < args.length && arg < arguments.length; i++) {
      console.log("before", i, args, arg);
      if (args[i] === undefined) args[i] = arguments[arg++];
      console.log("after", i, args, arg);
    }
    // console.log(this, args);
    return fn.apply(this, args); //args = [ 'a', 'b', 'c' ]
  };
};
function abc(a, b, c) {
  // console.log("abc", a, b, c);
}

// var ac = abc.partial(undefined, "b", undefined);
// ac("a", "c");
// var ac2 = abc.partial(undefined, "b");
// ac2("a", "c");

function add() {
  var result = 0;
  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];
    // console.log("result:", result);
  }
  return result;
}
// add(1, 2, 3, 4, 5);
// var add2 = add.partial(undefined, 2);
// add2(1, 3, 4, 5);
var add3 = add.partial(undefined, undefined, 3, undefined, undefined);
add3(1, 2, 4, 5);
add3(50, 50, 50, 50);
