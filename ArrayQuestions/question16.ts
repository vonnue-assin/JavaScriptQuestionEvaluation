// Write a function to convert the roman numbers into indian numbers

const convertRomanNumbersToIndianNumbers = (roman: string): number => {
  const romanMap: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;

  for (let i = 0; i < roman.length; i++) {
    const currentValue = romanMap[roman[i]];
    const nextValue = romanMap[roman[i + 1]];

    if (nextValue && currentValue < nextValue) {
      total -= currentValue;
    } else {
      total += currentValue;
    }
  }
  return total;
};

console.log(convertRomanNumbersToIndianNumbers("XXI"));
console.log(convertRomanNumbersToIndianNumbers("IV"));
console.log(convertRomanNumbersToIndianNumbers("MCMXCIV"));
