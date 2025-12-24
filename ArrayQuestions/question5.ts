//Write a JavaScript function to format a number up to specified decimal places.

const formatNumbertoSpecificDecimalPlaces = (decimal: number, num: number) => {
  return decimal.toFixed(num);
};

console.log(formatNumbertoSpecificDecimalPlaces(2.100212, 2));
console.log(formatNumbertoSpecificDecimalPlaces(2.100212, 3));
console.log(formatNumbertoSpecificDecimalPlaces(2100, 2));
