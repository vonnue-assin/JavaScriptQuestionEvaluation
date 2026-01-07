// Write a JavaScript program to compute the sum of an array of integers.

const sumOfArrays = (array: number[]) => {
  return array.reduce((num, acc) => num + acc);
};

const array1 = [1, 2, 3, 4];
console.log(sumOfArrays(array1));

const array2 = [5, 6, 7, 8];
console.log(sumOfArrays(array2));

const array3 = [1, 2, 3, 4, 5, 6];
console.log(sumOfArrays(array3));
