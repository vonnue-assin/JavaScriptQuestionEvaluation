// Javascript Create New Object from Existing Array

const fruits = ["apple", "banana", "orange", "mango"];
const fruitsObject = Object.fromEntries(
  fruits.map((fruit) => [fruit, fruit.length])
);

console.log(fruitsObject);

// Write a JavaScript function to create a specified number of elements with a pre-filled string value array.

const createFilledArray = (num: number, value: string) => {
  return Array(num).fill(value);
};

const res = createFilledArray(4, "Assin");
console.log(res);

//Write a JavaScript function to move an array element from one position to another.

const moveElementImmutable = (
  array: number[],
  fromIndex: number,
  toIndex: number
) => {
  const newArray = [...array];
  const [element] = newArray.splice(fromIndex, 1);
  newArray.splice(toIndex, 0, element);
  return newArray;
};

const move = moveElementImmutable([10, 20, 30, 40, 50], 0, 3);
console.log(move);
