function _curry(fn) {
  return function (a) {
    console.log("a:", a);
    return function (b) {
      console.log("b:", b);
      return fn(a, b);
    };
  };
}
function _curry(fn) {
  return function (a, b) {
    return arguments.length == 2
      ? fn(a, b)
      : function (b) {
          return fn(a, b);
        };
  };
}
function _curryr(fn) {
  return function (a) {
    console.log("a:", a);
    return function (b) {
      console.log("b:", b);
      return fn(b, a);
    };
  };
}
function _curryr(fn) {
  return function (a, b) {
    return arguments.length == 2
      ? fn(a, b)
      : function (b) {
          console.log("a:", a, "b", b);
          // a: 10, b undefined
          // a: 10, b 5
          return fn(b, a);
        };
  };
}
const sub = _curryr(function (a, b) {
  return a - b;
});
let sub10 = sub(10);
console.log(sub10, sub10(5)); //[Function (anonymous)], -5
