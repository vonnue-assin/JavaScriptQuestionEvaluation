//Write a JavaScript program to find the area of a traingle where three sides are 5,6,7.

const findTriangleArea = (a: number, b: number, c: number) => {
  const sum = (a + b + c) / 2;

  const area = Math.sqrt(sum * (sum - a) * (sum - b) * (sum - c));

  return area;
};

const side_1 = 5;
const side_2 = 6;
const side_3 = 7;

const resultss = findTriangleArea(side_1, side_2, side_3);

console.log(
  `The area of a triangle with sides ${side_1}, ${side_2} ,${side_3} is ${resultss.toFixed(
    2
  )}`
);
