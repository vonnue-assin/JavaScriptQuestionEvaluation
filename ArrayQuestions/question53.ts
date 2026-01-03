//Write a JavaScript program to remove specified elements from the right of a given array of elements.

const dropRight = (array: string | any[], n = 1) => {
  if (n >= array.length) {
    return [];
  }
  return array.slice(0, array.length - n);
};

console.log(dropRight([1, 2, 3, 4], 1));
console.log(dropRight([1, 2, 3, 4], 2));
console.log(dropRight([1, 2], 5));

const dropRightArray = (array: number[], n = 1) => {
  array.splice(-n);
  return array;
};

console.log(dropRightArray([1, 2, 3, 4], 2));

const getEveryNth = (array: number[] | string[], n: number) => {
  const result = [];
  for (let i = n - 1; i < array.length; i += n) {
    result.push(array[i]);
  }
  return result;
};

const nthElement = [
  "apple",
  "orange",
  "apple",
  "banana",
  "strawberry",
  "pear Apple",
];

console.log(getEveryNth(nthElement, 6));

const numbersArrays = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(getEveryNth(numbersArrays, 6));

const getAllPairs = (
  array1: number[] | string[],
  array2: number[] | string[]
) => {
  return;
};

// Example
const colors = ["red", "blue"];
const sizes = ["S", "M", "L"];

console.log(getAllPairs(colors, sizes));
