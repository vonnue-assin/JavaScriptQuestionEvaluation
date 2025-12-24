// Write a JavaScript function to convert a decimal number to a binary, hexadecimal or octal number.

const decimal_to_binary = (number: number, type: string) => {
  switch (type) {
    case "B":
      return number.toString(2);
    case "H":
      return number.toString(16).toUpperCase();
    case "O":
      return number.toString(8);
    default:
      return "Invalid type";
  }
};

console.log(decimal_to_binary(120, "B"));
console.log(decimal_to_binary(120, "H"));
console.log(decimal_to_binary(120, "O"));
