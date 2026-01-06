// Write a JavaScript function to calculate the nth root of a number

const calculateNthRootOfNumber = (value: number, root: number) => {
  if (value < 0) {
    if (root % 2 === 1) {
      return -Math.pow(Math.abs(value), 1 / root);
    } else {
      return NaN;
    }
  }
  return value ** (1 / root);
};

console.log(calculateNthRootOfNumber(64, 3));
console.log(calculateNthRootOfNumber(16, 2));
console.log(calculateNthRootOfNumber(625, 4));
console.log(calculateNthRootOfNumber(-8, 3));
console.log(calculateNthRootOfNumber(64, -2));
