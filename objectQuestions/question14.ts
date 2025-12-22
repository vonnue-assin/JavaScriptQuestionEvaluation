// Write a JavaScript function to retrieve all the values of an object's properties.

const getOwnValues = (array: object[]) => {
  return array.map((obj) => Object.values(obj));
};

var lib = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254,
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    libraryID: 4264,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

const libValue = getOwnValues(lib);
console.log(libValue);
