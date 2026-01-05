// Write a JavaScript program to find a pair of elements (indices of the two numbers) in a given array whose sum equals a specific target number.

const findTwoSum = (array: number[], target: number) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return [i, j];
      }
    }
  }
  return array;
};

const numbered = findTwoSum([10, 20, 10, 40, 50, 60, 70], 50);
console.log(numbered);
const num = findTwoSum([12, 13, 15, 17, 18, 19], 28);
console.log(num);
