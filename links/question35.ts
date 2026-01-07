//Write a JavaScript function to calculate the combinations of n and r.
// The formulae is n!/(r! * (n-r)!)

const factorial = (n: number) => {
  if (n === 0 || n === 1) return 1;

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

const factorialCombinations = (n: number, r: number) => {
  if (r < 0 || r > n) return 0;
  if (r === 0 || r === n) return 1;

  return factorial(n) / (factorial(r) * factorial(n - r));
};

console.log(factorial(3));
console.log(factorial(6));
console.log(factorial(0));
console.log(factorial(1));

console.log(factorialCombinations(6, 2));
console.log(factorialCombinations(5, 3));
