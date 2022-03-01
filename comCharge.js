"use strict";

const charges = [
  [1, 2, 3, 4, 5],
  [10, 20, 30, 60],
  [300, 200, 100],
];

function computeCharges(arr) {
  let myArr = [];
  let temp = [];
  let average = 0;
  let max = 0;
  let midArr = [];

  for (let i = 0; i < arr.length; i++) {
    temp = arr[i];

    average = compAve(temp);
    max = findMax(temp);

    midArr.push(average);
    midArr.push(max);

    myArr.push(midArr);
    midArr = [];
  }

  return myArr;
}

function compAve(arr) {
  let ave = 0;
  let temp = 0;

  for (let i = 0; i < arr.length; i++) {
    temp += arr[i];
  }
  ave = temp / arr.length;

  return ave;
}

function findMax(arr) {
  let maxNum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }

  return maxNum;
}
console.info(computeCharges(charges));
