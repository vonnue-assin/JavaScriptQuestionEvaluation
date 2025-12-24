//Write a JavaScript function to find the highest value in an array.

const highestValue = (array: number[]) => {
  let max = array[0];
  array.forEach((value) => {
    if (value > max) {
      max = value;
    }
  });
  return max;
};

console.log(highestValue([10, 2, 35, 8, 22]));
console.log(highestValue([12, 34, 56, 1]));
console.log(highestValue([-12, -34, 0, -56, -1]));
