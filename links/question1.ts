// Write a JavaScript program to sort a list of elements using Insertion sort.

// Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.

const insertionSort = (array: number[]) => {
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = key;
  }
  return array;
};

const numbers = [5, 2, 9, 0, 10, 13, 6, 1];
console.log("Before sorting:", numbers);
console.log("After Sorting:", insertionSort(numbers));
