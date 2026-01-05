// Write a JavaScript program to get all the indexes where NaN is found in a given array of numbers and NaN.

const test = (array: number[]): number[] => {
  return array

    .map((element, index) => (Number.isNaN(element) ? index : false))

    .filter((element): element is number => element !== false);
};

console.log(test([2, NaN, 8, 16, 32]));
console.log(test([NaN, 12, 15, 28]));
console.log(test([8, 15, 17, 20, NaN]));
