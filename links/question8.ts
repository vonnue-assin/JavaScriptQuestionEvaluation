// Write a JavaScript program to find the leap years in a given range of years.

const findLeapYears = (startYear: number, endYear: number) => {
  const leapYears = [];

  for (let i = startYear; i <= endYear; i++) {
    if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) {
      leapYears.push(i);
    }
  }
  return leapYears;
};

const results = findLeapYears(1996, 2026);
console.log(results);
