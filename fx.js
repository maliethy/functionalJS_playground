const log = console.log;

const curry =
  (f) =>
  (a, ..._) =>
    _.length ? f(a, ..._) : (..._) => f(a, ..._);

const reduce = curry((f, acc, iter) => {
  //iter는 data list이다
  if (!iter) {
    //시작하는 값을 주지 않았을 때
    iter = acc[Symbol.iterator]();
    acc = iter.next().value; //첫번째 값을 초기값 acc에 넣는다
  } else {
    iter = iter[Symbol.iterator]();
  }
  let cur;
  while (!(cur = iter.next()).done) {
    const a = cur.value;
    acc = f(acc, a);
  }
  return acc;
});

const go = (...args) => reduce((a, f) => f(a), args);

const pipe =
  (f, ...fs) =>
  (...as) =>
    go(f(...as), ...fs);

const take = curry((l, iter) => {
  let res = [];
  iter = iter[Symbol.iterator]();
  let cur;
  while (!(cur = iter.next()).done) {
    const a = cur.value;
    res.push(a);
    if (res.length == l) return res;
  }
  return res;
});

const takeAll = take(Infinity);

const L = {};

L.range = function* (l) {
  let i = -1;
  while (++i < l) yield i;
};

L.map = curry(function* (f, iter) {
  for (const a of iter) {
    yield f(a);
  }
});

L.filter = curry(function* (f, iter) {
  for (const a of iter) {
    if (f(a)) yield a;
  }
});

L.entries = function* (obj) {
  for (const k in obj) yield [k, obj[k]];
};

const map = curry(pipe(L.map, takeAll));

const filter = curry(pipe(L.filter, takeAll));

const find = curry((f, iter) => go(iter, L.filter(f), take(1), ([a]) => a));

var add = (a, b) => a + b;

const range = (l) => {
  let i = -1;
  let res = [];
  while (++i < l) {
    res.push(i);
  }
  return res;
};
module.exports = {
  log: log,
  L: L,
  curry: curry,
  add: add,
  range: range,
  find: find,
  map: map,
  filter: filter,
  reduce: reduce,
  take: take,
  go: go,
  pipe: pipe,
  takeAll: takeAll,
};
