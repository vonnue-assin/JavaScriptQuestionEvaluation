// const sortOddAndEvenNumbers = (array: number[]): number[] => {
//   if (!Array.isArray(array)) return [];

//   const oddNumbers = array.filter((n) => n % 2 !== 0).map((n) => n * 2);
//   const evenNumbers = array.filter((n) => n % 2 === 0).map((n) => n * 2);

//   return [...oddNumbers, ...evenNumbers];
// };

// // Example
// console.log(sortOddAndEvenNumbers([1, 2, 3, 4, 5]));

// const sortOddAndEvenNumbers = (array: number[]) => {
//   if (!Array.isArray(array)) return [];

//   // Filter odd and even numbers and square them
//   const oddNumbers = array.filter((n) => n % 2 !== 0).map((n) => n ** 2);
//   const evenNumbers = array.filter((n) => n % 2 === 0).map((n) => n ** 2);

//   return {
//     oddNumbers,
//     evenNumbers,
//   };
// };

// // Example usage
// const result = sortOddAndEvenNumbers([1, 2, 3, 4, 5]);
// console.log(result);
// Output:
// { oddNumbers: [1, 9, 25], evenNumbers: [4, 16] }

// Array
// let nums = [5, 3, 8, 1];

// nums.sort((a, b) => a - b);
// console.log("Sorted array using sort():", nums);

// let list = [5, 3, 8, 1];

// let listSorted = list.toSorted((a, b) => a - b);
// console.log("Sorted list using toSorted():", listSorted);

// function factorial(n: number) {
//   if (n === 0 || n === 1) {
//     return 1;
//   }

//   return n * factorial(n - 1);
// }

// console.log(factorial(5));

// let stack = [];

// stack.push("a");
// stack.push("b");
// stack.push("c");

// console.log("Initial stack:");
// console.log(stack);

// console.log("\nElements popped from stack:");
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());

// console.log("\nStack after elements are popped:");
// console.log(stack);
