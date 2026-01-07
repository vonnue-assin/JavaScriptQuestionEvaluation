// Write a JavaScript program to print all the prime factors of a given number.

const getPrimeFactors = (n: number) => {
  const factors: number[] = [];

  let a = 2;
  let number = Math.abs(n);

  if (number <= 1) return 1;

  while (number % 2 === 0) {
    factors.push(2);
    number /= 2;
  }

  a = 3;
  while (a * a <= number) {
    while (number % a === 0) {
      factors.push(a);
      number /= a;
    }
    a += 2;
  }

  if (number > 1) {
    factors.push(number);
  }
  return factors;
};

console.log(getPrimeFactors(75));
console.log(getPrimeFactors(18));
console.log(getPrimeFactors(101));
