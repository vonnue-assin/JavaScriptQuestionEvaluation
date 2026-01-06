// Write a JavaScript function to do currency math (add, subtract, multiply, divide etc.).

function preciseRound(num: number, digits: number): number {
  const factor = Math.pow(10, digits);

  return Math.round((num + Number.EPSILON) * factor) / factor;
}

console.log(preciseRound(120, 9));

const toCents = (value: string | number) => {
  if (typeof value === "string") {
    value = parseFloat(value.replace(/[^0-9.-]+/g, ""));
  }
  return Math.round(value * 100);
};

const fromCents = (cents: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(cents / 100);
};

const currencyMath = {
  add: (a: string, b: string) => fromCents(toCents(a) + toCents(b)),
  subtract: (a: string, b: string) => fromCents(toCents(a) - toCents(b)),
  multiply: (a: string, factor: number) =>
    fromCents(Math.round(toCents(a) * factor)),
  divide: (a: string, divisor: number) =>
    fromCents(Math.round(toCents(a) / divisor)),
};

const n1 = "$40.24";
const n2 = "$21.57";

console.log(currencyMath.add(n1, n2));
console.log(currencyMath.subtract(n1, n2));
