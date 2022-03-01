const testArr1 = [
  [1, 2, 3],
  [5, 2, 3],
  [9, 2, 3],
];
const testArr2 = [
  [1, 2, 10],
  [3, 4, 5],
  [5, 6, 7],
];

function addMatrix(arr1, arr2) {
  let sumArr = [];

  for (let i = 0; i < arr1.length; i++) {
    let temp = [];
    for (let j = 0; j < arr1.length; j++) {
      temp.push(arr1[i][j] + arr2[i][j]);
    }
    sumArr.push(temp);
  }

  return sumArr;
}

console.log(addMatrix(testArr1, testArr2));
