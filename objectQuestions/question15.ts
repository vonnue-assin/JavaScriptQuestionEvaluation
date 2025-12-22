// Write a JavaScript function to convert an object into a list of `[key, value]` pairs.

const convertObjectsToList = (object: object) => {
  return Object.entries(object);
};

const fruits = {
  apple: 10,
  banana: 5,
  orange: 8,
  mango: 15,
};

const keyValue = convertObjectsToList(fruits);
console.log(keyValue);
