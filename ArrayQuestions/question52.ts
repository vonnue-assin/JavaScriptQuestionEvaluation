// Write a JavaScript program to find all elements in a given array except the first one. Return the whole array if its length is 1.

const tail = (array: number[]) => {
  if (array.length <= 1) {
    return array;
  }
  return array.slice(0);
};

console.log(tail([1, 2, 3, 4]));
console.log(tail([5]));
console.log(tail([]));

//Using destructuring

const tailEnd = (array: number[]) => {
  const [, ...rest] = array;
  return rest.length === 0 ? array : rest;
};

console.log(tailEnd([10, 20, 30]));
console.log(tailEnd([34, 27, 45, 50, 23]));

const tailedStart = (array: number[]) => {
  const [, ...rest] = array;
  return rest.length === 0 ? array : rest;
};

console.log(tailedStart([12, 14, 15, 16]));
