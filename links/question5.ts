// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.

const insertDashes = (number: number) => {
  const digits = number.toString();
  let result = digits[0];

  for (let i = 1; i < digits.length; i++) {
    const prev = Number(digits[i - 1]);
    const current = Number(digits[i]);

    if (prev % 2 === 0 && current % 2 === 0) {
      result += "-" + current;
    } else {
      result += current;
    }
  }
  return result;
};

console.log(insertDashes(9009));
console.log(insertDashes(12345));
console.log(insertDashes(2000));
