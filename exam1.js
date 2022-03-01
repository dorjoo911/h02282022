"use strict";

// const charges = [
//   [1, 2, 3, 4, 5],
//   [10, 20, 30, 60],
//   [300, 200, 100],
// ];

// function computeCharges(arr) {
//   let myArr = [];
//   let temp = [];
//   let average = 0;
//   let max = 0;
//   let midArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     temp = arr[i];

//     average = compAve(temp);
//     max = findMax(temp);

//     midArr.push(average);
//     midArr.push(max);

//     myArr.push(midArr);
//     midArr = [];
//   }

//   return myArr;
// }

// function compAve(arr) {
//   let ave = 0;
//   let temp = 0;

//   for (let i = 0; i < arr.length; i++) {
//     temp += arr[i];
//   }
//   ave = temp / arr.length;

//   return ave;
// }

// function findMax(arr) {
//   let maxNum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > maxNum) {
//       maxNum = arr[i];
//     }
//   }

//   return maxNum;
// }
// console.info(computeCharges(charges));

function largerstPrimeFactor(number) {
  let largePrime = 0;

  if (number <= 1) {
    return 0;
  } else {
    let primes = [];
    primes = primeNumbers(number);
    for (let i = 0; i < primes.length; i++) {
      if (number % primes[i] === 1) {
      }
    }
  }

  return largePrime;
}
console.log(largerstPrimeFactor(10)); //5; 6936 --> 2, 3 and 17; 1-->0 2 3 5 7

function primeNumbers(num) {
  let primes = [];
  for (let i = 2; i < num; i++) {
    if (isPrime(i) == true) {
      primes.push(i);
    }
  }
  return primes;
}
// console.log(primeNumbers(10));

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function maxNum(nums) {
  let maxPr = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > maxPr) {
      maxPr = nums[i];
    }
  }
  return maxPr;
}
console.log(maxNum([1, 2, 3]));
