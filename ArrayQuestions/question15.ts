// Write a JavaScript program to evaluate binomial coefficients.
// Note :
// Binomial coefficient : According to Wikipedia - In mathematics, binomial coefficients are a family of positive integers that occur as coefficients in the binomial theorem. They are indexed by two nonnegative integers; the binomial coefficient indexed by n and k. Under suitable circumstances the value of the coefficient is given by the expression :

// Arranging binomial coefficients into rows for successive values of n, and in which k ranges from 0 to n, gives a triangular array called Pascal's triangle.

const findBinomialCoefficients = (n: number, k: number) => {
  if (k < 0 || k > n) return;
  if (k === 0 || k === n) return 1;

  if (k > n / 2) k = n - k;

  let result = 1;
  for (let i = 1; i <= k; i++) {
    result = (result * (n - i + 1)) / i;
  }
  return Math.round(result);
};

console.log(findBinomialCoefficients(8, 3));
console.log(findBinomialCoefficients(10, 2));
