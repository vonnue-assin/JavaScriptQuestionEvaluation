//Write a JavaScript function to calculate the quotient and modulus of two integers.

const findDivisorAndModulus = (a: number, b: number) => {
  if (b === 0) return "Divsion by zero is not allowed";

  const quotient = Math.floor(a / b);
  const modulus = a % b;
  return {
    quotient: quotient,
    modulus: modulus,
  };
};

console.log(findDivisorAndModulus(17, 5));
console.log(findDivisorAndModulus(10, 2));
