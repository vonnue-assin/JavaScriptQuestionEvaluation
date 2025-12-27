// Write a JavaScript function to get the nth largest element from an unsorted array...

const nthlargestNumber = (array: number[], n: number) => {
  const sortedArray = [...array].sort((a, b) => b - a);

  return sortedArray[n - 1];
};

console.log(nthlargestNumber([43, 56, 23, 89, 88, 90, 99, 652], 6));
