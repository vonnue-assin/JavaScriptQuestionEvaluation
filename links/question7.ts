// We have the following arrays :

// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th","st","nd","rd"]

// Write a JavaScript program to display the colors in the following way :

// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."
// - - - - - - - - - - - - -

const color = [
  "Red",
  "Blue",
  "Yellow",
  "Violet",
  "Pink",
  "Indico",
  "Orange",
  "Green",
];

const order = ["th", "nd", "rd", "st"];

const displayColors = (color: string[], suffixes: string | any) => {
  for (let i = 0; i < color.length; i++) {
    let position = i + 1;
    let suffix;

    if (position % 100 >= 11 && position % 100 <= 13) {
      suffix = suffixes[0];
    } else {
      suffix = suffixes[position % 10] || suffixes[0];
    }
    console.log(`${position}${suffix} choice is ${color[i].trim()}.`);
  }
};

displayColors(color, order);
