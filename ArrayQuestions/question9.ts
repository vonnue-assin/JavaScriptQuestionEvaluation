// Write a JavaScript function to find out if a number is a natural number or not.
// Note :
// Natural numbers are whole numbers from 1 upwards : 1, 2, 3, and so on ... or from 0 upwards in some area of mathematics: 0, 1, 2, 3 and so on ...
// No negative numbers and no fractions.

const isNatural = (n: number): boolean => {
  return Number.isFinite(n) && Number.isInteger(n) && n >= 0;
};

console.log(isNatural(-15));
console.log(isNatural(1));
console.log(isNatural(10.22));
console.log(isNatural(10 / 0));
