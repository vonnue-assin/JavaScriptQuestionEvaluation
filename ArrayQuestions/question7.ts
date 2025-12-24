//Write a JavaScript function to find the lowest value in an array.

const findLowestValueInArray = (array: number[]) => {
  let minValue = array[0];
  array.forEach((value) => {
    if (value < minValue) {
      minValue = value;
    }
  });
  return minValue;
};

console.log(findLowestValueInArray([12, 34, 56, 1]));
console.log(findLowestValueInArray([-12, -34, 0, -56, -1]));
