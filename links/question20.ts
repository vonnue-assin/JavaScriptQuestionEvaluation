//  Write a JavaScript program that takes an array of intergers and returns false if every number is not prime. Otherwise ,returns true

const isPrimeNumber = (number: number): boolean => {
  if (number <= 1) return false;
  if (number <= 3) return true;
  if (number % 2 === 0 || number % 3 === 0) return false;

  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) return false;
  }
  return true;
};

const isPrimeValue = (nums: number[]): boolean => {
  return nums.some(isPrimeNumber);
};

console.log(isPrimeValue([4, 6, 8, 10]));
console.log(isPrimeValue([4, 5, 8, 10]));
console.log(isPrimeValue([1, 0, -5]));
