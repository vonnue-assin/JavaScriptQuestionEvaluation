//Write a JavaScript function which returns the n rows by n columns identity matrix.

// console.log(getIdentityMatrixes(3));

const getIdentityMatrixes = (n: number): number[][] => {
  return Array.from({ length: n }, (_, rowIndex) =>
    Array.from({ length: n }, (_, colIndex) => (rowIndex === colIndex ? 1 : 0))
  );
};

console.log(getIdentityMatrixes(6));
