const { log, L } = require("./fx.js");

const isIterable = (a) => a && a[Symbol.iterator];

L.flatten = function* (iter) {
  for (const a of iter) {
    log("isIterable", a, isIterable(a));
    // isIterable null null
    // a null
    // { value: null, done: false }
    // isIterable [ 1, 2 ] [Function: values]
    // b 1
    // { value: 1, done: false }
    // b 2
    // { value: 2, done: false }
    // isIterable 3 undefined
    // a 3
    // { value: 3, done: false }
    // isIterable 4 undefined
    // a 4
    // { value: 4, done: false }
    // isIterable [ 5, 6 ] [Function: values]
    // b 5
    // { value: 5, done: false }
    // b 6
    // { value: 6, done: false }
    // isIterable [ 7, 8, 9 ] [Function: values]
    // b 7
    // { value: 7, done: false }
    if (isIterable(a)) {
      for (const b of a) {
        log("b", b);
        yield b;
      }
    } else {
      log("a", a);
      yield a;
    }
  }
};

L.flatten = function* (iter) {
  for (const a of iter) {
    if (isIterable(a)) yield* a;
    //yield* 표현식은 다른 generator 또는 이터러블(iterable) 객체에 yield를 위임할 때 사용됩니다.
    else yield a;
  }
};
L.deepFlat = function* f(iter) {
  for (const a of iter) {
    if (isIterable(a)) yield* f(a);
    //기명함수, 유명함수
    else yield a;
  }
};
log([...L.deepFlat([1, [2, [3, 4], [5]]])]);
[1, 2, 3, 4, 5];
const it = L.flatten([[1, 2], 3, 4, [5, 6], [7, 8, 9]]);
log(it.next());
log(it.next());
log(it.next());
log(it.next());
log(it.next());
// log(it.next());
// log(it.next());
// log(it.next());
