const promiseFactory = (time) => {
  return new Promise((resolve, reject) => {
    console.log("time:", time);
    setTimeout(resolve, time);
  });
};
[1000, 2000, 3000, 4000].reduce((acc, cur) => {
  console.log("acc:", acc, "\n", "cur:", cur);
  return acc.then(() => promiseFactory(cur));
}, Promise.resolve());

// acc: Promise { undefined }
//  cur: 1000
// acc: Promise { <pending> }
//  cur: 2000
// acc: Promise { <pending> }
//  cur: 3000
// acc: Promise { <pending> }
//  cur: 4000
// time: 1000
// time: 2000
// time: 3000
// time: 4000
