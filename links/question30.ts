// Write a JavaScript function to get the highest number from three different numbers

const HighestOfThree = (a: number, b: number, c: number) => {
  return Math.max(a, b, c);
};

console.log(HighestOfThree(-6, 12, 8));
console.log(HighestOfThree(7, 1, 9));

// Write a JavaScript function to get the smallest number from three different numbers

const smallestOfThree = (a: number, b: number, c: number) => {
  return Math.min(a, b, c);
};

console.log(smallestOfThree(0, 19, 10));
console.log(smallestOfThree(-8, 9, 10));
