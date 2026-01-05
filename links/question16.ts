// Write a JavaScript program to check if an array is a factor chain or not.

// A factor chain is an array in which the previous element is a factor of the next consecutive element. The following is a factor chain:

const isFactorChain = (numbers: number[]) => {
  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i + 1] % numbers[i] !== 0) {
      return false;
    }
  }
  return true;
};

console.log(isFactorChain([2, 4, 8, 16, 32]));
console.log(isFactorChain([2, 4, 16, 32, 64]));
console.log(isFactorChain([2, 4, 16, 32, 68]));
