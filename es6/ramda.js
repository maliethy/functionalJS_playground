/* 배열에서 특정 인덱스의 값들을 뽑아 새로운 배열을 만드는 함수 */

// pure script
const pickIndexes = function (indexArray, array) {
  let result = [];

  for (let i = 0; i < indexArray.length; i++) {
    result.push(array[indexArray[i]]);
  }

  return result;
};

pickIndexes([0, 2], ["a", "b", "c"]); // => ['a', 'c']

// Ramda
const pickIndexes = R.compose(R.values, R.pickAll);
pickIndexes([0, 2], ["a", "b", "c"]); // => ['a', 'c']
