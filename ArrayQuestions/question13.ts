//Write a JavaScript function to calculate the sum of values in an array.

const sumOfArrays = (array: number[]) => {
  const sum = array.reduce((acc, num) => acc + num);

  return sum;
};

console.log(sumOfArrays([1, 2, 3]));
console.log(sumOfArrays([100, -200, 3]));
console.log(sumOfArrays([1, 2, 3, 8]));

//Write a JavaScript function to calculate the product of values in an array.

const productfArrays = (array: number[]) => {
  const product = array.reduce((acc, num) => acc * num);

  return product;
};

console.log(productfArrays([1, 2, 3]));
console.log(productfArrays([100, -200, 3]));
console.log(productfArrays([1, 2, 3, 8]));
