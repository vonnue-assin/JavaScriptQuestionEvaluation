//Write a JavaScript function to clone an array

const cloneArray = (array: number[]) => {
  return [...array];
};

const orginal = [1, 3, 5, 7];
const copy = cloneArray(orginal);
copy.push(9);

console.log(orginal);
console.log(copy);
