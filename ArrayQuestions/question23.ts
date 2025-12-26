// Write a JavaScript function to calculate the combination of n and r.
// The formula is : n!/(r!*(n - r)!)

const factorial = (num: number): number => {
  if (num === 0 || num === 1) return 1;
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
};

const findCombinations = (num: number) => {
  if (num === 0 || num === 1) return 1;

  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
};

const binomialCoefficient = (n: number, r: number) => {
  if (r < 0 || r > n) return 0;

  const numerator = factorial(n);
  const denominator = factorial(r) * factorial(n - r);

  return numerator / denominator;
};

console.log(binomialCoefficient(6, 2));
console.log(binomialCoefficient(5, 3));


