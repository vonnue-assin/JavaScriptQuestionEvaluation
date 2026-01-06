//Write a JavaScript function to find the minimum value from an array

const findMinimumNumFromArray = (array: number[]) => {
  if (array.length === 0) return Infinity;

  return Math.min(...array);
};

//Write a JavScript function to find the max number from an array

const findMaximumNumFromArray = (array: number[]) => {
  if (array.length === 0) return Infinity;

  return Math.max(...array);
};

console.log(findMaximumNumFromArray([12, 13, 8, 1, 51]));
console.log(findMinimumNumFromArray([1, 2, 8, 0, 9, 1010]));
