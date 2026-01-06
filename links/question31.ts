// Write a JavaScript program to add repeatedly all the digits of a given non-negative number untill the result has only one digit

const digitalRootIterativeNumber = (n: number) => {
  let currentNumber = n;

  while (currentNumber >= 10) {
    currentNumber = currentNumber
      .toString()
      .split("")
      .reduce((sum, digit) => sum + parseInt(digit), 0);
  }
  return currentNumber;
};

console.log(digitalRootIterativeNumber(38));
console.log(digitalRootIterativeNumber(11));
console.log(digitalRootIterativeNumber(453));
