//Write a JavaScript function to generate a random integer.

const randomInteger = (min: number, max: number) => {
  const lower = Math.ceil(min);
  const upper = Math.ceil(max);

  Math.floor(Math.random() * (max - min + 1)) + min;
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
};

const integer = randomInteger(12, 1);
console.log(integer);
console.log(randomInteger(20, 1));
console.log(randomInteger(1, 10));
