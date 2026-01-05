//There are two arrays with individual values.Write a JavaScript program to compute the sum of each individual index value in the given array.

const addTwoArrays = (array1: number[], array2: number[]) => {
  const sumArray = [];

  if (array1.length !== array2.length) {
    return null;
  }

  for (let i = 0; i < array1.length; i++) {
    sumArray.push(array1[i] + array2[i]);
  }
  return sumArray;
};

const array1 = [3, 0, 2, 7];
const array2 = [4, 5, 6, 3];
const newArray = addTwoArrays(array1, array2);
console.log(newArray);

//Union of two arrays

const unionOfArrays = (array1: number[], array2: number[]) => {
  const twoArrays = [...array1, ...array2];
  return twoArrays;
};

//Write a JavaScript function to find the difference between two arrays.

const new_Array = unionOfArrays(array1, array2);
console.log(new_Array);

const differenceOfTwoArrays = (arr1: number[], arr2: number[]) => {
  let differenceArray = [];
  if (arr1.length !== arr2.length) {
    return null;
  }

  for (let i = 0; i < arr1.length; i++) {
    differenceArray.push(arr1[i] - arr2[i]);
  }
  return differenceArray;
};

const arr1 = [10, 12, 14, 16];
const arr2 = [2, 6, 8, 4];
const differenceArrays = differenceOfTwoArrays(arr1, arr2);
console.log(differenceArrays);
