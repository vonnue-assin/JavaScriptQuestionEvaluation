// Write a JavaScript program to filter out the element(s) of a given array that have one of the specified values.

//Sort using specific values

const array = [10, 12, 13, 14, 15, 16, 17, 19, 18, 20];
const valuesToRemove = [13, 17, 15, 19];

const result = array.filter((item) => !valuesToRemove.includes(item));

console.log(result);

const evenNumbers = array.filter((item) => item % 2 === 0);
console.log(evenNumbers);

const oddNumbers = array.filter((item) => item % 2 === 1);
console.log(oddNumbers);

//Sort using Strings

const fruits = [
  "apple",
  "orange",
  "apple",
  "banana",
  "strawberry",
  "pear Apple",
];
const remove = ["apple"];

const newArray = fruits.filter((fruit) => !remove.includes(fruit));
console.log(newArray);

// const names = ["John", "jane", "Alice", "JOHN"];
// const remove = ["john"];

// const result = names.filter(
//   name => !remove.includes(name.toLowerCase())
// );

// console.log(result);
// // Output: ["jane", "Alice"]

const names = ["John", "jane", "Alice", "JOHN", "Mathew"];
const removeNames = ["john"];

const newArrayNames = names.filter(
  (name) => !removeNames.includes(name.toLowerCase())
);
console.log(newArrayNames);

//Simple method using Set

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const valuesToBeRemoved = new Set([2, 4, 6]);

const newArrayResult = numberArray.filter(
  (item) => !valuesToBeRemoved.has(item)
);
console.log(newArrayResult);
