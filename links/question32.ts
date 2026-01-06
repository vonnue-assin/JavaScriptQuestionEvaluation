//Write a JavaScript program to check whether the sum of the two square integers is equal to another integer

const sumOfSquares = (c: number) => {
  if (c < 0) return false;

  let left = 0;
  let right = Math.floor(Math.sqrt(c));

  while (left <= right) {
    const currentSum = left * left + right * right;

    if (currentSum === c) {
      return true;
    } else if (currentSum < c) {
      left++;
    } else {
      right--;
    }
  }

  return false;
};

console.log(sumOfSquares(5));
console.log(sumOfSquares(3));
console.log(sumOfSquares(25));
console.log(sumOfSquares(10));
