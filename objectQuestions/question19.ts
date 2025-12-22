//Write a function to find the secondLargest number in an array

const findSecondLargestNumber = (array: number[]) => {
  let n = array.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  const largest = array[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    if (array[i] < largest) {
      return array[i];
    }
  }
  return;
};

const largestNumber = findSecondLargestNumber([1, 9, 6, 7, 10, 8, 90,90,10]);

console.log(largestNumber);
