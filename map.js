const numbers = [1, 4, 9];

// 배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수를 실행
const roots = numbers.map(function (item) {
  // 반환값이 새로운 배열의 요소가 된다. 반환값이 없으면 새로운 배열은 비어 있다.
  return Math.sqrt(item);
});

// 위 코드의 축약표현은 아래와 같다.
// const roots = numbers.map(Math.sqrt);

// map 메소드는 새로운 배열을 반환한다
console.log(roots); // [ 1, 2, 3 ]
// map 메소드는 원본 배열은 변경하지 않는다
console.log(numbers); // [ 1, 4, 9 ]

function Prefixer(prefix) {
  this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function (arr) {
  // 콜백함수의 인자로 배열 요소의 값, 요소 인덱스, map 메소드를 호출한 배열, 즉 this를 전달할 수 있다.
  return arr.map(function (x) {
    // x는 배열 요소의 값이다.
    return this.prefix + x; // 2번째 인자 this를 전달하지 않으면 this === window
  }, this);
};

const pre = new Prefixer("-webkit-");
const preArr = pre.prefixArray(["linear-gradient", "border-radius"]);
console.log(preArr);
// [ '-webkit-linear-gradient', '-webkit-border-radius' ]
