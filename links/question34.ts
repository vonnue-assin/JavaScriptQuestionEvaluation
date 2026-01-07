// Write a JavaScript program that checks if a given number is self-dividing.
// In mathematics, a self-dividing number is one that can be divided by every digit (except digit zero) within it.

const isSelfDividingNumber = (num: number) => {
  if (num <= 0) return false;

  let temp = num;

  while (temp > 0) {
    const digit = temp % 10;

    if (digit === 0) return false;

    if (num % digit !== 0) return false;

    temp = Math.floor(temp / 10);
  }
  return true;
};

console.log(isSelfDividingNumber(128));
console.log(isSelfDividingNumber(22));
console.log(isSelfDividingNumber(102));
console.log(isSelfDividingNumber(124));
console.log(isSelfDividingNumber(123));
console.log(isSelfDividingNumber(120));
