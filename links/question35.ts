const factorialComb = (n: number) => {
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

  return factorialComb(n) / (factorialComb(r) * factorialComb(n - r));
};

console.log(factorialCombinations(6, 2));
console.log(factorialCombinations(5, 3));
