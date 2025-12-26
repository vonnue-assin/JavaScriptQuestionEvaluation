//Write a JavaScript program to calculate the sum of a given number's digits.In mathematics, the digit sum of a natural number in a given number base is the sum of all its digits. For example, the digit sum of the decimal number 6098 would be 6+0+9+8=23.

const sumOfDigits = (num: number) => {
  return [...Math.abs(num).toString()].reduce(
    (acc, digit) => acc + Number(digit),
    0
  );
};

console.log(sumOfDigits(6098));
