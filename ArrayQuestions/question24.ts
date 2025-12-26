//Write a JavaScript function to get all prime numbers from 0 to a specified number.

// const getAllPrimeNumbers = (limit: number): number[] => {
//   if (limit < 2) return [];

//   const isPrime = new Array(limit + 1).fill(true);
//   isPrime[0] = isPrime[1] = false;

//   for (let p = 2; p * p <= limit; p++) {
//     if (isPrime[p]) {
//       for (let i = p * p; i <= limit; i += p) {
//         isPrime[i] = false;
//       }
//     }
//   }

//   const primes: number[] = [];
//   for (let i = 2; i <= limit; i++) {
//     if (isPrime[i]) primes.push(i);
//   }

//   return primes;
// };

const getAllPrimeNumbers = (num: number) => {
     
};

console.log(getAllPrimeNumbers(10));
console.log(getAllPrimeNumbers(30));
