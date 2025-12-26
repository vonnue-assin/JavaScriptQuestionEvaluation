//Write a JavaScript function to subtract elements from an array.

const subtractFromArrays = (array: number[]) => {
  const substract = array.reduce((a, b) => a - b);
  return substract;
};

const result = subtractFromArrays([12, 45, 67, 28]);
console.log(result);
console.log(subtractFromArrays([15, 14, 13, 12, 11]));
