//Write a JavaScript function that returns the number of minutes in hours and minutes

const getTotalMinutes = (hours: number, minutes: number) => {
  return hours * 60 + minutes;
};

console.log(getTotalMinutes(3, 30));
console.log(getTotalMinutes(2, 20));

//Write a JavaScript function to find the quater (1 to 4) of the year

const getQuarter = (date: Date | string | number): number => {
  const month = new Date(date).getMonth();
  return Math.floor(month / 3) + 1;
};

console.log(getQuarter(new Date(2015, 1, 21)));

console.log(getQuarter(new Date(2015, 10, 18)));
