let obj = [1, 2];
obj[5] = 5;
obj.push(6);
obj["len" + "gth"] = 10;
obj.push(11);
// console.log(obj);

// function() { }
// SyntaxError: Function statements require a function name

0,
  (function (a) {
    // console.log(a);
  })(1);

new (function () {})();
new (function () {
  // console.log(1);
})();
// new function () {
//   console.log(1)
// }
const jy = new (function () {
  this.name = "jy";
  this.age = 29;
  this.constructor.prototype.hi = function () {
    console.log("hi " + this.name);
  };
})();
console.log(jy);
jy.hi();
