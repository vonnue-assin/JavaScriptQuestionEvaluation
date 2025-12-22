// Write a JavaScript program to calculate circle area and perimeter.

// Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.

//1) function to calculate the area of the circle

const areaOfCircle = (radius: number) => {
  const pi = 3.14159;
  const area = pi * radius ** 2;
  return area;
};

const circleArea = console.log(areaOfCircle(2));

//2) function to calculate the perimeter of the circle

const perimeterOfCircle = (raduis: number) => {
  const pi = 3.14159;
  const perimeter = 2 * pi * raduis;
  return perimeter;
};

const perimeterCircle = console.log(perimeterOfCircle(6));
