// const countInnerArrays = (arr: (number | (number | number[])[])[]) => {
//   return arr.filter((item) => Array.isArray(item)).length;
// };

const countInnerArrays = (array: any[]) => {
  return array.filter((item) => Array.isArray(item)).length;
};

const test1 = [2, 8, [6], 3, 3, 5, 3, 4, [5, 4]];
const test2 = [2, 8, [6, 3, 3], [4], 5, [3, 4, [5, 4]]];

console.log(countInnerArrays(test1));
console.log(countInnerArrays(test2));
