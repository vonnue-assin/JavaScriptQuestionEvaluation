const getMiddleCharacters = (str: string) => {
  const length = str.length;

  if (length === 0) return "";

  const middle = length / 2;

  if (length % 2 !== 0) {
    return str.charAt(middle);
  } else {
    return str.substring(middle - 1, middle + 1);
  }
};

console.log(getMiddleCharacters("ABC"));
console.log(getMiddleCharacters("JS"));
console.log(getMiddleCharacters("Coding"));
console.log(getMiddleCharacters("12345"));
