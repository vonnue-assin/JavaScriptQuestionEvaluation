//Write a JavaScript program to count the number of times the digit 1 appears in 1 to a given number.

const countDigitOne = (n: number): number | boolean => {
  if (n <= 0) return false;

  let count = 0;

  for (let i = 1; i <= n; i *= 10) {
    const divider = i * 10;

    const fullGroups = Math.floor(n / divider);
    count += fullGroups * i;

    const remainder = n % divider;
    if (remainder >= i) {
      count += Math.min(remainder - i + 1, i);
    }
  }

  return count;
};

console.log(countDigitOne(11));
console.log(countDigitOne(305));
console.log(countDigitOne(0));
