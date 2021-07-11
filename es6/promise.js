function add10(a, callback) {
  setTimeout(() => callback(a + 10), 100);
}

var a = add10(5, (res) => {
  add10(res, (res) => {
    add10(res, (res) => {
      // log(res);
    });
  });
});

// log(a);

function add20(a) {
  return new Promise((resolve) => setTimeout(() => resolve(a + 20), 100));
  //promise는 비동기 상황을 일급값으로 return해서 다룬다
  //callback은 코드나 콘텍스트로 다룬다
}

var b = add20(5).then(add20).then(add20);
// .then(log);

// log(b);
//pending, fufilled, reject상태를 다루는 일급값을 return하는 것이 callback과 가장 큰 차이를 가진다
