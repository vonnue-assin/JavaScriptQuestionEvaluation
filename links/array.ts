// Write a JavaScript function to reverse a number

function reverseNumberMath(num: number): number {
  let rev = 0;
  let n = Math.abs(num);

  while (n > 0) {
    rev = rev * 10 + (n % 10);
    n = Math.floor(n / 10);
  }

  return num < 0 ? -rev : rev;
}

console.log(reverseNumberMath(23398));
