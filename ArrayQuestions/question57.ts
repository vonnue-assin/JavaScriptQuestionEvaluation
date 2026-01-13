//Write a JavaScript program to calculate the age

const calculateAge = (birthDate: Date): number => {
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  const monthDifference = today.getMonth() - birthDate.getMonth();
  const dayDifference = today.getDate() - birthDate.getDate();

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--;
  }
  return age;
};

console.log(calculateAge(new Date(1982, 11, 4)));
32;
console.log(calculateAge(new Date(1962, 1, 1)));
53;
