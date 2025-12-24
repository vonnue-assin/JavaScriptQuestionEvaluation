// Write a JavaScript function to convert a binary number to a decimal number.

const convertToBinary = (binary: string, number: number) => {
  return parseInt(binary, number);
};

console.log(convertToBinary("110011", 2));
console.log(convertToBinary("100", 2));
