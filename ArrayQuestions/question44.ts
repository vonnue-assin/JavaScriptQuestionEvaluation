// Write a JavaScript program to find a pair of elements (indices of the two numbers) in a given array whose sum equals a specific target number.

const findIndices = (nums: number[], target: number) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1 + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};

const number = [10, 20, 30, 40];
const targetValue = 60;
console.log(findIndices(number, targetValue));
