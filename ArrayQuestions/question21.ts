// Write a JavaScript function to convert a positive number to a negative number.
// Test Data :
// console.log(pos_to_neg(15));
// -15

const convertPositiveToNegativeNumber = (num: number) => {
  return -Math.abs(num);
};

console.log(convertPositiveToNegativeNumber(12));
console.log(convertPositiveToNegativeNumber(89));
