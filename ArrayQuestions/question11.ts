// Write a JavaScript function to check whether a variable is numerical or not.

const isNumerical = (num: number | string) => {
  if (num == " ") return false;
  return Number.isFinite(num);
};

console.log(isNumerical(12));
console.log(isNumerical("abcd"));
console.log(isNumerical("12"));
console.log(isNumerical(" "));
console.log(isNumerical(1.2));
console.log(isNumerical(-200));
