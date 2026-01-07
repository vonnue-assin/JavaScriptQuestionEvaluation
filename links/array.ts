// Write a JavaScript function to calculate the combination of n and r.
// The formula is : n!/(r!*(n - r)!).
// Test Data :
// console.log(combinations(6, 2));
// 15
// console.log(combinations(5, 3));
// 10

const factorial = (n: number): number => {
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

const combinations = (n: number, r: number): number => {
  if (r < 0 || r > n) return 0;
  if (r === 0 || r === n) return 1;

  return factorial(n) / (factorial(r) * factorial(n - r));
};

console.log(combinations(6, 2));
console.log(combinations(5, 3));
