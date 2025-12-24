// Write a JavaScript function to get the greatest common divisor (GCD) of two integers.

//According to wikipedia In mathematics,the greatest common divisor of two or more integers,when at least one of them is not zero,is the largest positive integer that divides the number without a remainder.

const gcd_of_two_numbers = (firstNumber: number, secondNumber: number) => {
  if (firstNumber < 0) firstNumber = -firstNumber;
  if (secondNumber < 0) secondNumber = -secondNumber;

  while (firstNumber !== secondNumber) {
    if (firstNumber > secondNumber) {
      firstNumber = firstNumber - secondNumber;
    } else {
      secondNumber = secondNumber - firstNumber;
    }
  }
  return firstNumber;
};

console.log(gcd_of_two_numbers(12, 13));
console.log(gcd_of_two_numbers(9, 3));

const gcd_of_two_number = (a: number, b: number) => {
  a = Math.abs(a);
  b = Math.abs(b);

  while (b) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

console.log(gcd_of_two_number(12, 13));
console.log(gcd_of_two_number(9, 3));
console.log(gcd_of_two_numbers(48, 18));

const gcdTwoNumbers = (a: number, b: number) => {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const gcdOfThreeNumbers = (a: number, b: number, c: number) => {
  const resultOfTwo = gcdTwoNumbers(a, b);

  return gcdTwoNumbers(resultOfTwo, c);
};

console.log(gcdOfThreeNumbers(3, 15, 27));
console.log(gcdOfThreeNumbers(5, 10, 15));
