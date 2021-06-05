function _curry(fn) {
  return function (a, b) {
    return arguments.length == 2
      ? fn(a, b)
      : function (b) {
          return fn(a, b);
        };
  };
}

function _curryr(fn) {
  return function (a, b) {
    return arguments.length == 2
      ? fn(a, b)
      : function (b) {
          return fn(b, a);
        };
  };
}

const _get = _curryr(function (obj, key) {
  console.log(obj, obj[key]);
  return obj == null ? undefined : obj[key];
});
let _length = _get("length");

function _each(list, iter) {
  for (let i = 0, len = _length(list); i < len; i++) {
    iter(list[i]);
  }
  return list;
}

function _is_object(obj) {
  console.log(typeof obj == "object" && !!obj); //obj=null 일때, false
  return typeof obj == "object" && !!obj;
}
// _is_object(null);
function _keys(obj) {
  return _is_object(obj) ? Object.keys(obj) : [];
}
function _each(list, iter) {
  let keys = _keys(list);
  for (let i = 0, len = keys.length; i < len; i++) {
    iter(list[keys[i]]);
  }
  return list;
}

const a = _each([1, 2, 3], (v) => v * 2);
console.log(a);

var f1 = _pipe(
  _count_by(function (user) {
    return user.age - (user.age % 10);
  }),
  _map((count, key) => `<li>${key}대는 ${count}명 입니다.</li>`),
  (list) => "<ul>" + list.join("") + "</ul>",
  document.write.bind(document)
);
// function(html){
// document.write(html)
// }
// document.write.bind(document)
// html => document.write(html)
//화살표 함수에는 new를 붙일 수 없고(생성자로 쓸 수 없고) arguments를 사용할 수도 없습니다.
