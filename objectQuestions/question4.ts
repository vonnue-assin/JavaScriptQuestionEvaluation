// Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: false,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: true,
  },
];

type bookProps = {
  author: string;
  title: string;
  readingStatus: boolean;
};

const displayReadingStatus = (books: bookProps[]) => {
  books.forEach((book) => {
    const status = book.readingStatus ? "already read" : "still need to read";
    console.log(
      `The book titled as ${book.title} by ${book.author} and Status:${status}`
    );
  });
};

console.log(displayReadingStatus(library));
