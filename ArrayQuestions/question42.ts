//How do you access the first and last elements of an array?

let array1 = [1, 2, 3, 4];
let firstElement = array1[0];
console.log(firstElement);
let lastElement = array1[array1.length - 1];
console.log(lastElement);

//How do you loop through an array in javaScript?
//You can loop through an array using either a for loop or a forEach() method

let array2 = [10, 11, 12, 13, 14, 15];
for (let i = 0; i <= array2.length - 1; i++) {
  console.log(array2[i]);
}

//Using forEach method

let array3 = [16, 17, 18, 19, 20];
array3.forEach((item) => {
  console.log(item);
});

//How to check if an element exists in an array using the indexOf() method.If the element is not found,indexOf() returns -1.

let array4 = [21, 22, 23, 24, 25];
if (array4.indexOf(2) !== -1) {
  console.log("Element found");
} else {
  console.log("Element not found");
}

if (array4.includes(23)) {
  console.log("Element found");
} else {
  console.log("Element not found");
}

// Write a function to flatten a nested array in JavaScript.

const sumOfArray = (array: number[]) => {
  return array.reduce((a, b) => a + b);
};

console.log(sumOfArray([1, 2, 3, 4, 5]));

// const flattenArray = (arr: NestedNumberArray): number[] => {
//   return arr.reduce((flat: number[], toFlatten): number[] => {
//     return flat.concat(
//       Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten
//     );
//   }, []);
// };

type NestedNumberArray = Array<Number | NestedNumberArray>;

const flattenArray = (array: NestedNumberArray): number[] => {
  return array.reduce((flat: number[], toFlatten): number[] => {
    return flat.concat(
      Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten
    );
  }, []);
};

const nested = [16, [17, 18], [[19], 20]];
console.log(flattenArray(nested));

const nestedArray = [16, 12, [19, 67], [12, 18], 19, 16];
const flat = nestedArray.flat();
console.log(flat);

//What does the reduce() method do in the flattenArray() function above?

// Answer: The reduce() method in JavaScript takes an array and applies a function to each element, accumulating the result into a single value. In the flattenArray() function above, the reduce() method is used to concatenate the current element (either a flattened sub-array or a non-array value) to the flattened array so far.

// Can you explain how the flat() method can be used to flatten an array in JavaScript?

// Answer: The flat() method is a built-in method in JavaScript that can be used to flatten an array. It takes a depth parameter, which specifies how many levels of nested arrays should be flattened. If no depth parameter is provided, it defaults to 1. Here's an example usage:

// var nestedArray = [1, [2, [3, 4], 5], 6];

// nestedArray.flat(2); // returns [1, 2, 3, 4, 5, 6]

//What is the difference between .map() and .forEach()?

// .map() and .forEach() are both array methods that allow you to loop through an array, but they differ in what they return.

// .map() returns a new array with the same length as the original array, where each element is the result of applying a callback function to the original element.
// .forEach() does not return anything, but it simply executes a callback function on each element of the array.

const numbers = [10, 11, 12, 13, 14, 15];
const doubledNumbers = numbers.map((item) => item ** 2);
console.log(doubledNumbers);

const arrayOfNumbers = [16, 17, 18, 19, 20];
const double = arrayOfNumbers.forEach((item) => item * 2);
console.log(double); // the output is undefined as it does not returns anything.

// What is the difference between .filter() and .find()?
// Answer: Both .filter() and .find() are array methods that allow you to search for elements in an array that meet certain criteria.

// .filter() returns a new array with all elements that pass a certain test provided by a callback function.
// .find() returns the value of the first element in the array that passes a certain test provided by a callback function.

const array5 = [30, 31, 32, 33, 34, 35];
const evenNumbers = array5.filter((num) => num % 2 === 0);
console.log(evenNumbers);

const firstOddElement = array5.find((num) => num % 2 !== 0);
console.log(firstOddElement);

//How to sort an array in the JavaScript

//You can sort an array using the sort() method.

const array6 = ["Banana", "Apple", "Mango", "Orange", "Strawberry"];
const sortedArray = array6.sort((a, b) => a.localeCompare(b));
console.log(sortedArray);

const array7 = [10, 19, 2, 3, 5, 28, 7, 27];
const sortedArrayNum = array7.sort((a, b) => a - b);
console.log(sortedArrayNum);

//Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.

const insertDashes = (input: string) => {
  const str = input.toString();
  let result = [str[0]];

  for (let i = 1; i < str.length; i++) {
    if (parseInt(str[i - 1]) % 2 === 0 && parseInt(str[i]) % 2 === 0) {
      result.push("-", str[i]);
    } else {
      result.push(str[i]);
    }
  }

  return result.join("");
};

console.log(insertDashes("025468"));
console.log(insertDashes("025678"));

// const swapCase = (str: string) =>
//   [...str]
//     .map((c) => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()))
//     .join("");

// const input = "The Quick Brown Fox";
// console.log(swapCase(input));

// const swapCase(str:string) {
//   let result = '';
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (char === char.toUpperCase()) {
//       result += char.toLowerCase();
//     } else {
//       result += char.toUpperCase();
//     }
//   }
//   return result;
// }

// console.log(swapCase("The Quick Brown Fox"));

// const swapCase = (str: string) =>
//   [...str]
//     .map((c) => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()))
//     .join("");

const swapCase = (str: string) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }
  return result;
};

console.log(swapCase("The Quick Brown Fox"));
console.log(swapCase("The Colour Of The Apple is Red"));
