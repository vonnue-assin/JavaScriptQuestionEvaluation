//Write a JavaScript function to test if a number is a power of 2.

const isPowerOfTwo = (num: number) => {
  if (num < 0) return false;

  const log = Math.log2(num);
  return Number.isInteger(log);
  //return log
};

console.log(isPowerOfTwo(256));
console.log(isPowerOfTwo(26));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(18));

//Write a JavaScript function to test if a number is a power of 3

const isPowerOfThree = (num: number) => {
  if (num < 0) return false;

  while (num % 3 === 0) {
    num /= 3;
  }
  return num === 1;
};

console.log(isPowerOfThree(27));
console.log(isPowerOfThree(45));
