// Write a JavaScript function that implements the nth root calculation iteratively using the Newton-Raphson method.

const nthRootByNewtonR = (
  value: number,
  n: number,
  precision: number = 1e-10
) => {
  if (value === 0) return 0;
  if (n <= 0) return NaN;
  if (value < 0 && n % 2 === 0) return NaN;
  const isNegative = value < 0;
  const nonNegativeValues = Math.abs(value);

  let x = nonNegativeValues / n;
  let delta = nonNegativeValues;

  while (delta > precision) {
    const xNext =
      (1 / n) * ((n - 1) * x + nonNegativeValues / Math.pow(x, n - 1));

    delta = Math.abs(xNext - x);
    x = xNext;
  }

  return isNegative ? -x : x;
};

console.log(nthRootByNewtonR(64, 3));
console.log(nthRootByNewtonR(625, 4));
console.log(nthRootByNewtonR(-27, 3));
console.log(nthRootByNewtonR(2, 2));
console.log(nthRootByNewtonR(81, 4));
