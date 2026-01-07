const displayCurrentDateTime = (): void => {
  const now = new Date();

  const dayOptions: Intl.DateTimeFormatOptions = { weekday: "long" };
  const day = new Intl.DateTimeFormat("en-US", dayOptions).format(now);

  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;

  console.log(`Today is : ${day}`);
  console.log(`Current time is : ${hours} ${ampm} : ${minutes} : ${seconds}`);
};

displayCurrentDateTime();
