// ##### [코드 2-80] 실행 이전의 공간에서 비동기 제어와 관련된 일 추가하기

function _async(func) {
  return function () {
    //(0-2)익명함수 return :ƒ (a, b, callback) {\n  // (1){ '0': 20, '1': 30, '2': [Function (anonymous)] }\n  setTimeout(function () {\n    callback(a + b);\n  }, 1000);\n}

    arguments[arguments.length++] = function (result) {
      //(1-2)3번째 인자 준비하기
      //(6-3)result=50
      _callback(result); // (7-1)console.log(r)에서 r에 50넘기기
    };
    //(1-2)
    //arguments[2] = function (result){
    //   _callback(result);
    // };
    //arguments2: [Arguments] { '0': 20, '1': 30, '2': [Function (anonymous)] }
    func.apply(null, arguments); // (2-1)add함수에 인자 3개 넘기기

    var _callback; // (3-1)
    function _async_cb_receiver(callback) {
      _callback = callback; // (5)callback = console.log(r)를 _callback에 할당
    }
    return _async_cb_receiver; // (3-2)
  };
}

var add = _async(function (a, b, callback) {
  //(0-1)add함수 생성

  setTimeout(function () {
    //(2-2)setTimeout실행 후 1초 기다림
    //(6-1)1초 뒤 setTimeout안 익명함수 실행
    callback(a + b); //(6-2)결과 callback(50);
  }, 1000);
});
// var add = function () {
//     console.log("arguments:", arguments); //arguments1: [Arguments] { '0': 20, '1': 30 }
//
//     arguments[arguments.length++] = function (result) {
//       // (1)
//       console.log("result:", result);
//       console.log("_callback:", _callback);
//       _callback(result); // (6)
//     };
//     console.log("arguments:", arguments);//arguments2: [Arguments] { '0': 20, '1': 30, '2': [Function (anonymous)] }
//     //arguments[2] = function (result){
//     //   _callback(result);
//     // };
//     //arguments[2] = function (result){
//     //   console.log(result);
//     // };
//       func.apply(null, arguments); // (2)

//     var _callback; // (3)
//     function _async_cb_receiver(callback) {
//       // (4)
//       _callback =  console.log; // (5)
//     }
//     return _async_cb_receiver;
// };

add(
  //(1-1)add함수에 인자 2개 넘기기
  20,
  30
)(function (r) {
  // (4)
  console.log(r);
  // (7-2)50
});
