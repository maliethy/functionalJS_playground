var slice = Array.prototype.slice;
// Array.prototype.slice.call = [].slice.call
let a = [].slice(); //[Function: slice],a는 slice 메서드
console.log(a); //[] 호출 시 새로운 빈 배열 반환
//console.log([1, 2].slice());
function toArray(data) {
  // console.log(data, this, arguments);
  //data: {0: 1, 1: 2, length: 2},
  //this: chrome browser->  Window {window: Window, self: Window, document: document, name: "0.7674433205713307", location: Location, …}
  //    ,nodejs-> Object [global]
  //arguments: {0: 1, 1: 2, length: 2},
  return slice.call(data); //[1,2]
}
var arr1 = toArray({ 0: 1, 1: 2, length: 2 }); //[].slice.call({ 0: 1, 1: 2, length: 2 })
//call이 [].slice를 실행하면서 { 0: 1, 1: 2, length: 2 }를 this로 사용한다
//실행 결과 새로운 배열 [1,2] 반환
console.log(arr1);
