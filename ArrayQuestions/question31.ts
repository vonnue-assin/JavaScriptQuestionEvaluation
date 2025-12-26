//Write a JavaScript program to check if  a given positive integer can be expressed as the sum of two or moare consecutive positive integers.

const canBeConsecutiveSum = (n: number) => {
  if (n < 3) return false;

  return (n & (n - 1)) !== 0;
};

console.log(canBeConsecutiveSum(33));
console.log(canBeConsecutiveSum(10));
console.log(canBeConsecutiveSum(8));
