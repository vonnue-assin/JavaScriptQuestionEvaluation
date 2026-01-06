// Write a JavaScript program to count the number of arrays inside a given array.

// const countNestedArraysPerf = (input: any[]): number => {
//   return input.reduce(
//     (count, item) => (Array.isArray(item) ? count + 1 : count),
//     0
//   );
// };

const countNestedArrays = (input: any[]) => {
  return input.reduce(
    (count, item) => (Array.isArray(item) ? count + 1 : count),
    0
  );
};

console.log(countNestedArrays([2, 8, [6, 3, 3], [4], 5, [3, 4, [5, 4]]]));
console.log(countNestedArrays([3, 7, 9, 11, 13, 15, 17]));
