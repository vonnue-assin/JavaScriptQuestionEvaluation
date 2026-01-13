// Write a JavaScript function to get the difference between two dates in days.

const getDateDifference = (date1: number | string, date2: number | string) => {
  const firstDate = new Date(date1);
  const secondDate = new Date(date2);

  const differenceInMs = Math.abs(secondDate.getTime() - firstDate.getTime());

  const differenceInDays = differenceInMs / (1000 * 60 * 60 * 24);

  return Math.floor(differenceInDays);
};

const date1 = "04/02/2014";
const date2 = "11/04/2014";

console.log(getDateDifference(date1, date2));
console.log(getDateDifference("12/02/2014", "11/04/2014"));
