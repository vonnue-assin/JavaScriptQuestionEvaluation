//Write a JavaScript program to calculate the smallest number whose digits multiply into a given number.

const smallestNumber = (n: number) => {
  if (n < 10) return n;

  const digits: number[] = [];

  for (let i = 9; i > 1; i--) {
    while (n % i === 0) {
      digits.push(i);
      n /= i;
    }
  }
  if (n !== 1) return 0;

  digits.sort((a, b) => a - b);
  const result = parseInt(digits.join(""));

  return result > Number.MAX_SAFE_INTEGER ? 0 : result;
};

console.log(smallestNumber(6));
console.log(smallestNumber(100));
console.log(smallestNumber(16));
console.log(smallestNumber(129));
