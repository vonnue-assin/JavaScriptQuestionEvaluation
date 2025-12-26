//Write a JavaScript function to show the first twenty Hamming numbers.
//Hamming numbers are numbers with prime factors of 2, 3 and 5.

const findHummingNumbers = () => {};

function decrement(n: number) {
  let mask = 1;

  while ((n & mask) === 0) {
    n = n ^ mask;
    mask = mask << 1;
  }

  n = n ^ mask;

  return n;
}

function subtractWithoutArithmetic(x: number, y: number) {
  while (y !== 0) {
    x = decrement(x);
    y = decrement(y);
  }
  return x;
}


console.log(subtractWithoutArithmetic(20, 5)); 
console.log(subtractWithoutArithmetic(100, 30)); 
console.log(subtractWithoutArithmetic(5, 10));
console.log(subtractWithoutArithmetic(0, 7)); 
