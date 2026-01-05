// Write a JavaScript program to shuffle an array

const shuffleArray = (array: number[] | string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const arrays = [10, 12, 23, 45, 78];
console.log(shuffleArray([...arrays]));

const numb = [2, 3, 4, 5, 6];
const shuffledNumbers = shuffleArray([...numb]);
console.log(shuffledNumbers);

const colors = [
  "Red",
  "Blue",
  "Yellow",
  "Violet",
  "Pink",
  "Indico",
  "Orange",
  "Green",
];
console.log(shuffleArray(colors));
