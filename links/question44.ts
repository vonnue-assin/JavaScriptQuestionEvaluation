//Write a JavaScript program to rotate the string 'w3resources' in the right direction.This is done periodically removing one letter from the string end and attaching it to front.

const rotateStringRight = (text: string) => {
  return text.slice(-1) + text.slice(0, -1);
};

let targetString: string = "🏀 ⚽";

const intervalId = setInterval(() => {
  targetString = rotateStringRight(targetString);

  console.clear();
  console.log(targetString);
}, 150);
