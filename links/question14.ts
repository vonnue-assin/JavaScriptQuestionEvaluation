// Write a JavaScript function to filter false, null, 0 and blank values from an array.

const filterArrays = (array: any) => {
  return array.filter(Boolean);
};

const arrayResult = filterArrays([58, "", "abcd", true, null, false, 0]);
console.log(arrayResult);

// Write a JavaScript function to generate an array of integer numbers, increasing one from the starting position, of a specified length.

const generateSequenceLoop = (start: number, length: number) => {
  const result = new Array(length);
  for (let i = 0; i < length; i++) {
    result[i] = start + i;
  }
  return result;
};

const ranges = generateSequenceLoop(1, 4);
console.log(ranges);

const generateSequence = (start: number, length: number) =>
  [...Array(length).keys()].map((i) => i + start);

const range = generateSequence(1, 8);
console.log(range);

// Write a JavaScript function to generate an array between two integers of 1 step length.

const generateRange = (start: number, end: number) => {
  const length = Math.abs(end - start) + 1;

  const step = start <= end ? 1 : -1;

  return Array.from({ length }, (_, i) => start + i * step);
};

console.log(generateRange(1, 4));
console.log(generateRange(-2, 2));
console.log(generateRange(10, 7));

