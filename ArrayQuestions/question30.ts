//Write a JavaScript program to print all the prime factors of a given number.

//Prime factorisation of a number is breaking it into a product of only prime numebrs,which are numbers greater than 1 divisible only by 1 and themselves

const getPrimeNumbers = (n: number) => {
  const factors = [];

  while (n % 2 === 0) {
    factors.push(2);
    n = n / 2;
  }

  for (let i = 3; i <= n; i += 2) {
    while (n % i === 0) {
      factors.push(i);
      n = n / i;
    }
  }

  return factors;
};

console.log(getPrimeNumbers(75));
console.log(getPrimeNumbers(18));
console.log(getPrimeNumbers(101));
