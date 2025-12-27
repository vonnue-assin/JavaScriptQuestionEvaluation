//Write a JavaScript program to calculate the mean of all the digits of a given number.
//In mathematics, the mean represents the simple average of two or more numbers. There are several methods available for computing the mean of a set of numbers, including the arithmetic mean method, which uses the sum of the numbers in the series, and the geometric mean method, which is the average of a set of products.

const meanOfNumbers = (num: string): number => {
  let sum = 0;

  for (let digit of num) {
    sum += Number(digit);
  }

  const totalDigits = num.length;
  const mean = sum / totalDigits;
  return mean;
};

console.log(meanOfNumbers("11"));
console.log(meanOfNumbers("66"));
console.log(meanOfNumbers("1151"));
