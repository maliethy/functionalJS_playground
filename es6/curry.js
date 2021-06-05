const products = [
  { name: '반팔티', price: 15000 },
  { name: '긴팔티', price: 20000 },
  { name: '핸드폰케이스', price: 15000 },
  { name: '후드티', price: 30000 },
  { name: '바지', price: 25000 },
];
const log = console.log;
const go = (...args) => {
  // ...arg: [
  //     { name: '반팔티', price: 15000 },
  //     { name: '긴팔티', price: 20000 },
  //     { name: '핸드폰케이스', price: 15000 },
  //     { name: '후드티', price: 30000 },
  //     { name: '바지', price: 25000 }
  //   ] [Function (anonymous)] [Function (anonymous)] [Function (anonymous)] [Function: log]
  //   console.log('args:', args);
  //   args: [
  //     [
  //       { name: '반팔티', price: 15000 },
  //       { name: '긴팔티', price: 20000 },
  //       { name: '핸드폰케이스', price: 15000 },
  //       { name: '후드티', price: 30000 },
  //       { name: '바지', price: 25000 }
  //     ],
  //     [Function (anonymous)],
  //     [Function (anonymous)],
  //     [Function (anonymous)],
  //     [Function: log]
  //   ]
  reduce((a, f) => f(a), args);
};
const pipe =
  (f, ...fs) =>
  (...as) =>
    go(f(...as), ...fs);
const curry =
  (f) =>
  (a, ..._) =>
    _.length ? f(a, ..._) : (..._) => f(a, ..._);

const map = curry((f, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(f(a));
  }
  return res;
});

const filter = curry((f, iter) => {
  let res = [];
  for (const a of iter) {
    if (f(a)) res.push(a);
  }
  return res;
});

const reduce = curry((f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();

    acc = iter.next().value;
  }
  for (const a of iter) {
    console.log('acc:', acc);
    acc = f(acc, a);
  }
  return acc;
});
const add = (a, b) => a + b;
// log(
//   reduce(
//     add,
//     map(
//       (p) => p.price,
//       filter((p) => p.price < 20000, products),
//     ),
//   ),
// );
add(1, 2);
go(
  products,
  (products) => filter((p) => p.price < 20000, products),
  (products) => map((p) => p.price, products),
  (prices) => reduce(add, prices),
  log,
);
const add1 = (a) => a + 1; //add1(3) -> a=3 -> 4

const f1 = (a) => add1(a);
const f1 = (a) => (a) => a + 1; //f1(3) -> add1(3) -> a=3 -> 4

const f2 = add1;
const f2 = (a) => a + 1; // f2(3) ->  add1(3) -> a=3 -> 4

// go(
//   products,
//   filter((p) => p.price < 20000),
//   map((p) => p.price),
//   reduce(add),
//   log,
// );
