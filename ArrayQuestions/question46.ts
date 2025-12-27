//Write a JavaScript function to find unique elements in two arrays.

const uniqueElements = (a: number[], b: number[]) => {
  const uniqueElementsofArray = new Set([...a, ...b]);
  return uniqueElementsofArray;
};

const array8 = [10, 11, 12, 13, 14, 15];
const array9 = [10, 18, 14, 17, 12, 11];
console.log(uniqueElements(array8, array9));
