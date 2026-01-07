// Write a JavaScript function that reverses a number

const reverseNumber = (n: number) => {
  let reverse = 0;
  let num = Math.abs(n);

  while (num > 0) {
    reverse = reverse * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  return n < 0 ? -reverse : reverse;
};

console.log(reverseNumber(23466));
console.log(reverseNumber(2378901));
