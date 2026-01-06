// Write a javaScript function to make a number of matrix

const createIterativeMatrix = (
  rows: number,
  cols: number,
  maxValue: number = 100
): number[][] => {
  const matrix: number[][] = [];
  for (let i = 0; i < rows; i++) {
    matrix[i] = [];
    for (let j = 0; j < cols; j++) {
      matrix[i][j] = Math.floor(Math.random() * maxValue);
    }
  }
  return matrix;
};

const matrixOne = createIterativeMatrix(4, 4);
console.log(matrixOne);

const createMatrixElement = (
  rows: number,
  cols: number,
  maxRange: number = 10
) => {
  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => Math.floor(Math.random() * maxRange))
  );
};

const matrix = createMatrixElement(5, 4);
console.log(matrix);
