// Write a JavaScript program to check whether a number is a Harshad Number or not.
// In recreational mathematics, a harshad number in a given number base, is an integer that is divisible by the sum of its digits when written in that base.

const isHarshadNumber = (num: number): boolean => {
  if (num <= 0) return false;
  const digitSum = [...num.toString()].reduce(
    (acc, digit) => acc + Number(digit),
    0
  );
  return num % digitSum === 0;
};

console.log(isHarshadNumber(18));
console.log(isHarshadNumber(171));
console.log(isHarshadNumber(19));
console.log(isHarshadNumber(113));
console.log(isHarshadNumber(200));