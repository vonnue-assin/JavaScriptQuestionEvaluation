// Write a JavaScript program to search for a given integer in an array of sorted integers using the Binary search Algorithm and recursion

const recursiveBinarySearch = (
  array: number[],
  target: number,
  left: number = 0,
  right: number = array.length - 1
) => {
  if (left > right) {
    return -1;
  }

  const mid = Math.floor((left + right) / 2);

  if (array[mid] === target) {
    return mid;
  }

  if (target < array[mid]) {
    return recursiveBinarySearch(array, target, left, mid - 1);
  }

  return recursiveBinarySearch(array, target, mid + 1, right);
};

const sortedNumber = [1, 3, 5, 7, 9, 11, 13, 15];
const sort = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
const target = 15;

const result = recursiveBinarySearch(sortedNumber, target);
console.log(recursiveBinarySearch(sort, 6));

if (result !== -1) {
  console.log(`Target ${target} found at index ${result}`);
} else {
  console.log(`Target ${target} not found in the array.`);
}
