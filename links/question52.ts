// Write a JavaScript program to find the first index of a given element in an array using the ternary search algorithm.

// A ternary search algorithm is a technique in CS for finding the minimum or maximum of a unimodal function. A ternary search determines either that the minimum or maximum cannot be in the first third of the domain or that of the domain or that it cannot be in the last third of the domian ,then repeats on the remaining two thirds. A ternery search is an example of a divide and conquer algorithm.

const ternarySearch = (array: number[], target: number): number => {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid1 = left + Math.floor((right - left) / 3);
    const mid2 = right - Math.floor((right - left) / 3);

    if (array[mid1] === target) return mid1;
    if (array[mid2] === target) return mid2;

    if (target < array[mid1]) {
      right = mid1 - 1;
    } else if (target > array[mid2]) {
      left = mid2 + 1;
    } else {
      left = mid1 + 1;
      right = mid2 - 1;
    }
  }

  return -1;
};

const Sorted = [2, 6, 29, 27, 56, 8, 90, 80, 78, 86, 67];
console.log(ternarySearch(Sorted, 81));
console.log(ternarySearch(Sorted, 80));
console.log(ternarySearch(Sorted, 2));
