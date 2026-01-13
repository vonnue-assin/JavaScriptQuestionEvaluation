// Write a JavaScript function to calculate yesterdays date

const yesterdaysDate = () => {
  const today = new Date();
  console.log(today);

  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  return yesterday;
};

console.log("Yesterday's Date:", yesterdaysDate());

// Write a JavaScript function to get the last day of a month.

const lastDayOfMonth = (year: number, month: number) => {
  return new Date(year, month, 0).getDate();
};

console.log(lastDayOfMonth(2026, 1));
