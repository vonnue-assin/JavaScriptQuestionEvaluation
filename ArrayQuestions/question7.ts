//Write a JavaScript function to find the lowest value in an array.

const findValueInArray = (array: number[]) => {
  let minValue = array[0];
  array.forEach((value) => {
    if (value < minValue) {
      minValue = value;
    }
  });
  return minValue;
};

console.log(findValueInArray([12, 34, 56, 1]));
console.log(findValueInArray([-12, -34, 0, -56, -1]));
