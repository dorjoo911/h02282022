function largestPrimeFactor(number) {
  let divisor = 2;

  while (number > 1) {
    if (number % divisor === 0) {
      number = number / divisor;
    } else {
      divisor++;
    }
  }
  return divisor;
}
console.log(largestPrimeFactor(10));
