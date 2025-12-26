// Write a JavaScript function to calculate the percentage (%) of a number.

const calculatePercentage = (total: number, percentage: number) => {
  return (total * percentage) / 100;
};

console.log(calculatePercentage(1000, 47.12));
console.log(calculatePercentage(2000, 50));
console.log(calculatePercentage(80, 20));
