//Write a JavaScript function to check whether a value is an integer or not.

const isIntegerNumber = (num: number) => {
  return Number.isInteger(num);
};

console.log(isIntegerNumber(23));
console.log(isIntegerNumber(4e2));
console.log(isIntegerNumber(NaN));
console.log(isIntegerNumber(23.75));
console.log(isIntegerNumber(-23));
