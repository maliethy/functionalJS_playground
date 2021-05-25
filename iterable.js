const jsdom = require('jsdom');
const { JSDOM } = jsdom;
//내장 iterable 객체 Array, Set, Map 이터러블/이터레이터 프로토콜을 따르는 for...of를 통해 값을 순회함
const log = console.log;
// log('Arr -----------');
// const arr = [1, 2, 3];
// let iter1 = arr[Symbol.iterator]();
// for (const a of iter1) log(a);
// log('Set -----------');
// const set = new Set([1, 2, 3]);
// for (const a of set) log(a);
// log('Map -----------');
// const map = new Map([
//   ['a', 1],
//   ['b', 2],
//   ['c', 3],
// ]);
// for (const a of map.keys()) log(a);
// for (const a of map.values()) log(a);
// for (const a of map.entries()) log(a);
// ## 이터러블/이터레이터 프로토콜
// - 이터러블: 이터레이터를 리턴하는 [Symbol.iterator]() method 를 가진 값
// - 이터레이터: { value, done } 객체를 리턴하는 next() method를 가진 값
// - 이터러블/이터레이터 프로토콜: 이터러블을 for...of, 전개 연산자 등과 함께 동작하도록 한 규약

const iterable = {
  [Symbol.iterator]() {
    let i = 3;
    return {
      next() {
        return i == 0 ? { done: true } : { value: i--, done: false };
      },
      [Symbol.iterator]() {
        console.log('this:', this);
        // this: {
        //     next: [Function: next],
        //     [Symbol(Symbol.iterator)]: [Function: [Symbol.iterator]]
        //   }
        return this;
      },
    };
  },
};
let iterator = iterable[Symbol.iterator]();
//TypeError: iterator is not iterable
iterator.next();
iterator.next();
// log(iterator.next());
// log(iterator.next());
// log(iterator.next());
for (const a of iterator) log(a);

// const arr2 = [1, 2, 3];
// let iter2 = arr2[Symbol.iterator]();
// iter2.next();
// log(iter2[Symbol.iterator]() == iter2); //true
// for (const a of iter2) log(a);
