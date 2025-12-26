// Write a JavaScript function to calculate degrees between 2 points with the inverse Y axis.

const calculateAngle = (x1: number, y1: number, x2: number, y2: number) => {
  const dy = y2 - y1;
  const dx = x2 - x1;
  const radians = Math.atan2(dy, dx);

  let degrees = radians * (180 / Math.PI);

  if (degrees < 0) {
    degrees += 360;
  }
  return degrees;
};

console.log(calculateAngle(1, 0, 12, 0));
console.log(calculateAngle(1, 0, 1, 10));
