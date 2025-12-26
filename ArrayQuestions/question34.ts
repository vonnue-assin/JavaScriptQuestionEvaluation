// Write a JavaScript program that checks whether a number (positive integer) is a Sastry number or not.
// The number N is a Sastry number when it is concatenated with N+1 and gives a perfect squares. Some Sastry numbers are 183, 328, 528, 715, 6099, 13224, 40495, 106755, 453288, 2066115, 2975208, 22145328, 28027683, 110213248...

const isSastryNumber = (n: number) => {
  const concatenatedStr = `${n}${n + 1}`;

  const concatenatedNum = Number(concatenatedStr);

  return Number.isInteger(Math.sqrt(concatenatedNum));
};

// Test Cases
console.log(isSastryNumber(183));
console.log(isSastryNumber(328));
console.log(isSastryNumber(27));
console.log(isSastryNumber(28027683));
