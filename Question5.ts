// Find the total number of digits in a given number.

const CountDigits = (number: number) => {
  if (number === 0) {
    return 1;
  }

  let count = 0;
  number = Math.abs(number);

  while (number > 0) {
    count++;

    number = Math.floor(number / 10);
  }
  return count;
};

console.log(CountDigits(12345));
console.log(CountDigits(0));
console.log(CountDigits(-2137890));
console.log(1234 / 10);
