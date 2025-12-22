const secondLargestNumber = (array: number[]) => {
  const n = array.length;

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

const largest = secondLargestNumber([12, 25, 91, 56, 0, 78]);
console.log(largest);
