//Write a JavaScript function to convert a number from one base to another.

const base_convert = (number: string, fromBase: number, toBase: number) => {
  return parseInt(number, fromBase).toString(toBase);
};

console.log(base_convert("E164", 16, 8));
console.log(base_convert("1000", 2, 8));
