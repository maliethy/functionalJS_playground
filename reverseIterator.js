const log = console.log;
const iterable1 = [1, 2];
const iterator1 = iterable1[Symbol.iterator]();
for (const val of iterable1) console.log(val);
function reverseIterator(list) {
  var cur = list.length;
  return {
    [Symbol.iterator]: function () {
      console.log("this:", this);
      //   this: {
      //     next: [Function: next],
      //     [Symbol(Symbol.iterator)]: [Function: [Symbol.iterator]]
      //   }
      return this;
    },
    next: () =>
      cur-- > 0
        ? { value: list[cur], done: false }
        : { value: undefined, done: true },
  };
}
for (const val of reverseIterator([1, 2])) log(val);
