// Write a JavaScript program to sort the characters in a string alpabetically.

export const sortStringAlphabetically = (str: string) => {
  return [...str].sort().join("");
};

const input = "JavaScript";
const sorteds = sortStringAlphabetically(input);

console.log("Orginal:", input);
console.log("Sorted:", sorteds);

export const sortStringAlphabeticallyLocale = (str: string) => {
  return [...str].sort((a, b) => a.localeCompare(b)).join("");
};

const string = "JavaScript";
const sortedString = sortStringAlphabeticallyLocale(string);

console.log("Orginal:", string);
console.log("Sorted:", sortedString);
