// Write a JavaScript program to check whether two vectors are orthogonal or not.
// Two vectors are orthogonal if they are perpendicular to each other. i.e. the dot product of the two vectors is zero.
// Let u and v are two vectors. The vectors u, v will be orthogonal if they are perpendicular, i.e., they form a right angle, or if the dot product they yield is zero.

const isOrthogonal = (vector1: number[], vector2: number[]): boolean => {
  if (vector1.length !== vector2.length) {
    throw console.error("Vectors must have same number of components");
  }

  const dotProduct = vector1.reduce((sum, current, index) => {
    return sum + current * vector2[index];
  }, 0);
  return dotProduct === 0;
};

console.log(isOrthogonal([1, 0], [0, 1]));
console.log(isOrthogonal([2, 3], [4, 5]));
const vec1 = [1, 0, 0];
const vec2 = [0, 1, 0];
console.log(isOrthogonal(vec1, vec2));
