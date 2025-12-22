let numbers = [12, 3, 6, 8, 3, 91, 2, 34, 36, 34, 56, 78, 78];
const sorted = numbers.sort((a, b) => b - a);
const removeDuplicates = new Set(sorted);
console.log(removeDuplicates);

let num = [1, 3, 4, 7, 2, 45, 2, 5];
const sortedNumbers = num.toSorted((a, b) => a - b);
const removeDuplicatesNumber = new Set(sortedNumbers);
console.log(removeDuplicatesNumber);

const factorials = (num: number): number => {
  if (num === 0 || num === 1) {
    return 1;
  }

  return num * factorials(num - 1);
};

console.log(factorials(2));
console.log(factorials(0));
console.log(factorials(30));

let stack = [];

stack.push("a");
stack.push("b");
stack.push("c");

console.log("Initial stack:");
console.log(stack);

console.log("\nElements popped from stack:");
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

console.log("\nStack after elements are popped:");
console.log(stack);

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [...array1, ...array2];
console.log(array3);

const number = [23, 24, 25, 26];
let minValue = Math.min(...number);
let maxValue = Math.max(...number);
console.log(minValue, maxValue);

const arra1 = [1, 2, 3];
const aar2 = [...arra1];
console.log(aar2)
