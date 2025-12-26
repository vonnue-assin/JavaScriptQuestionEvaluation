//Write a JavaScript program to calculate the volume of a Sphere.

const volumeOfSphere = (radius: number) => {
  const pi = 3.141;
  const volume = (4 / 3) * pi * radius * radius ** 2;
  return volume;
};

console.log(volumeOfSphere(3));
console.log(volumeOfSphere(4));
console.log(volumeOfSphere(6));
