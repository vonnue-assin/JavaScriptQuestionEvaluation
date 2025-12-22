// Write a JavaScript program to get the volume of a cylindrical with four decimal places using object classes.

// Volume of a cylinder : V = πr2h

// where r is the radius and h is the height of the cylinder.

const volumeOfCylinder = (radius: number, height: number) => {
  const pi = 3.14159;

  const volume = pi * radius ** 2 * height;
  return Number(volume);
};

const cylinder = volumeOfCylinder(2, 6);
console.log(cylinder);
