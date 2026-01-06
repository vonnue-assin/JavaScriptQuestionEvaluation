//Write a JavaScript function to round a number to a specified number of digits and strip extra zeroes

const roundAndStripZeroes = (number: number, digits: number) => {
  const roundedString = number.toFixed(digits);

  return +roundedString;
};

console.log(roundAndStripZeroes(5.56789, 2));
console.log(roundAndStripZeroes(5.5, 2));
console.log(roundAndStripZeroes(5.0, 2));
