// Write a JavaScript program to create a clock.

// const clockTime = () => {
//   const now = new Date();
//   const hours = now.getHours().toString().padStart(2, "0");
//   const minutes = now.getMinutes().toString().padStart(2, "0");
//   const seconds = now.getSeconds().toString().padStart(2, "0");
//   console.log(`${hours}:${minutes}:${seconds}`);
// };

const clockTime = () => {
  setInterval(() => {
    const now = new Date();

    const timeString = now.toLocaleTimeString("en-GB");

    console.log(timeString);
  }, 1000);
};

clockTime();
