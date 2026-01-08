// Write a JavaScript program to sort a list of elements using Pancake sort.

// pancake sorting is the colloquial term for the mathematical problem of sorting a disordered stack of pancakes in order of size when a spatuala can be inserted at any point in the stack and used to flip all pancakes above it.
// A Pancake number is the minimum number of flips required for a given number of pancakes.It is the variation of the sorting problem in which the only allowed operation is to reverse the elements of some prefix of the sequence.

const flip = (array: number[], k: number) => {
  let start = 0;
  while (start < k) {
    [array[start], array[k]] = [array[k], array[start]];
    start++;
    k--;
  }
};

const findMaxIndex = (array: number[], n: number) => {
  let maxIndex = 0;
  for (let i = 1; i < n; i++) {
    if (array[i] > array[maxIndex]) {
      maxIndex = i;
    }
  }
  return maxIndex;
};

const pancakeSort = (array: number[]) => {
  for (let currentSize = array.length; currentSize > 1; currentSize--) {
    const maxIndex = findMaxIndex(array, currentSize);

    if (maxIndex !== currentSize - 1) {
      if (maxIndex !== 0) {
        flip(array, maxIndex);
      }
    }
    flip(array, currentSize - 1);
  }
  return array;
};

const unSortedArray = [12, 13, 19, 5, 1, 6, 7, 8, 61];

console.log("original:", unSortedArray);
console.log("Sorted:", pancakeSort([...unSortedArray]));
