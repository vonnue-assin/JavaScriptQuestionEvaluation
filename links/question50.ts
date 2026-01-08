// Write a JavaScript program to sort the characters in a string alpabetically.

const sortStringAlphabetically = (str: string) => {
  return [...str].sort().join("");
};

const input = "JavaScript";
const sorteds = sortStringAlphabetically(input);

console.log("Orginal:", input);
console.log("Sorted:", sorteds);
