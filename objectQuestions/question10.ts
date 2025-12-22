// Write a JavaScript program to sort an array of JavaScript objects.

var librarys = [
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

type sortedArrayProps = {
  title: string;
  author: string;
  libraryID: number;
};

const sortedArray = (array: sortedArrayProps[]) => {
  const sorted = array.sort((a, b) => b.libraryID - a.libraryID);
  return sorted;
};

const sorted_array = console.log(sortedArray(librarys));
