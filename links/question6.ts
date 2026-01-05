// // Write a JavaScript program to find the most frequent item in an array.

const findMostFrequent = (array: number[]) => {
  if (array.length === 0) return null;

  const frequencyMap = {};
  let maxCount = 0;
  let mostFrequentItem = array[0];

  for (const item of array) {
    frequencyMap[item] = (frequencyMap[item] || 0) + 1;

    if (frequencyMap[item] > maxCount) {
      maxCount = frequencyMap[item];
      mostFrequentItem = item;
    }
  }
  return { item: mostFrequentItem, count: maxCount };
};

const numbers = [3, 7, 3, 1, 3, 7, 9, 7, 7, 4, 1, 1, 1, 1, 1];
const result = findMostFrequent(numbers);
console.log(result);
