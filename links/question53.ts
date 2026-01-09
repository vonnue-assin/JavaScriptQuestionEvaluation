// Write a JavaScript program to find an element in a given sorted array of elements using Interpolation Search.

//Interpolation search is an alogorithm for searching for a key in an array that has been ordered by numerical values assigned to the keys.

const interpolationSearch = (array: number[], target: number): number => {
  let low = 0;
  let high = array.length - 1;

  while (low <= high && target >= array[low] && target <= array[high]) {
    if (array[low] === array[high]) {
      if (array[low] === target) return low;
      break;
    }

    const pos =
      low +
      Math.floor(
        ((target - array[low]) * (high - low)) / (array[high] - array[low])
      );

    if (array[pos] === target) {
      return pos;
    }

    if (array[pos] < target) {
      low = pos + 1;
    } else {
      high = pos - 1;
    }
  }

  return -1;
};

const sortedArray = [
  10, 12, 13, 16, 18, 19, 20, 21, 22, 23, 24, 33, 35, 42, 47,
];
console.log(interpolationSearch(sortedArray, 18));
console.log(interpolationSearch(sortedArray, 47));
console.log(interpolationSearch(sortedArray, 5));
