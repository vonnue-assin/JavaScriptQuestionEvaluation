//Write a JavaScript function to sort an array of objects,using the bucket sort alogorithm

const bucketSort = (array: number[], bucketSize = 5) => {
  if (array.length === 0) return array;

  const min = Math.min(...array);
  const max = Math.max(...array);

  const bucketCount = Math.floor((max - min) / bucketSize) + 1;

  const buckets: number[][] = Array.from({ length: bucketCount }, () => []);

  array.forEach((num) => {
    const index = Math.floor((num - min) / bucketSize);
    buckets[index].push(num);
  });

  const sortedArrays: number[] = [];
  buckets.forEach((buckets) => {
    buckets.sort((a, b) => a - b);
    sortedArrays.push(...buckets);
  });

  return sortedArrays;
};

const numbersArray = [29, 10, 13, 1, 19, 100, 18, 97, 16];

console.log("Orginal:", numbersArray);
console.log("Sorted:", bucketSort(numbersArray));
