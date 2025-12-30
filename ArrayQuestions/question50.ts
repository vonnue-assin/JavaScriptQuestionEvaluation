//Write a JavaScript function to check whether an `input` is a date object or not.

const isDate = (input: any) => {
  return input instanceof Date && !isNaN(input.valueOf());
};

console.log(isDate(new Date()));
console.log(isDate(new Date("invalid")));
console.log(isDate("2025-12-30"));
console.log(isDate(Date.now()));
console.log(isDate([1, 2, 4, 0]));
console.log(isDate("October 13, 2014 11:13:00"));
console.log(isDate(new Date(86400000)));
console.log(isDate(new Date(99, 5, 24, 11, 33, 30, 0)));

//Write a JavaScript function to get the current date.

const getCurrentDate = (separator = "-") => {
  const today = new Date();

  let date = today.getDate();
  let month = today.getMonth() + 1;
  const year = today.getFullYear();

  if (date < 10) date = "0" + date;
  if (month < 10) month = "0" + month;

  return `${date}${separator}${month}${separator}${year}`;
};

console.log(getCurrentDate("/"));
console.log(getCurrentDate("-"));
console.log(getCurrentDate("."));

const getFormattedDate = (separator: string) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return [month, day, year].join(separator);
};

console.log(getFormattedDate("/"));
console.log(getFormattedDate("."));
console.log(getFormattedDate("-"));

//Write a JavaScript function to get the number of days in a month.

const numberOfDaysInMonth = (month: number, year: number) => {
  return new Date(year, month, 0).getDate();
};

console.log(numberOfDaysInMonth(2, 2025));
console.log(numberOfDaysInMonth(12, 2025));
console.log(numberOfDaysInMonth(2, 2012));

//Write a JavaScript function to get the maximum date from an array of dates.

const getMaxDate = (dateArray: any) => {
  return new Date(Math.max(...dateArray));
};

const dates = [
  new Date("2025-01-01"),
  new Date("2025-12-31"),
  new Date("2024-10-05"),
];

console.log(getMaxDate(dates));

//Write a JavaScript function to get the minimum date from an array of dates.

const getMinDate = (dateArray: any) => {
  return new Date(Math.min(...dateArray));
};

const minDates = [
  new Date("2025-01-01"),
  new Date("2025-12-31"),
  new Date("2024-10-05"),
];

console.log(getMinDate(minDates));

//Write a JavaScript function to get the month name from a particular date.

const getMonthName = (date: any, locale = "en-US") => {
  return date.toLocaleString(locale, { month: "long" });
};

const myDate = new Date();
console.log(getMonthName(myDate));
