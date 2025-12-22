//Write a function find the frequency of numbers in an array

const frequencyOfNumbers = (array: number[]) => {
  let sortedArray = [...array].sort((a, b) => a - b);
  let count = 1;
  let output = [];

  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] === sortedArray[i + 1]) {
      count++;
    } else {
      output.push({ number: sortedArray[i], frequency: count });
      count = 1;
    }
  }
  return output;
};

let outputs = frequencyOfNumbers([1, 5, 7, 9, 10, 5, 2, 13]);
console.log(outputs);
