// Write a JavaScript function to calculate the nth root of a number.

const findNthRootofNumber = (num: number, n: number): number | string => {
  if (num === 0) return 0;

  if (num < 0) {
    if (n % 2 === 0) return NaN;
    return -Math.pow(Math.abs(num), 1 / n);
  }

  return Math.pow(num, 1 / n);
};

console.log(findNthRootofNumber(64, 2));
console.log(findNthRootofNumber(16, 4));
console.log(findNthRootofNumber(8, 3));
