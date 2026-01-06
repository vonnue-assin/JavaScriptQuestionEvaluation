// Write a javsScript function to add the number of traces of a matrix

const findMatrixTraceSum = (matrix: number[][]) => {
  const rows = matrix.length;

  if (rows === 0) return 0;

  const cols = matrix[0].length;

  if (rows !== cols) {
    console.log("Trace is undefined for non-square matrices.");
  }

  let traceSum = 0;

  for (let i = 0; i < rows; i++) {
    traceSum += matrix[i][i];
  }
  return traceSum;
};

const matrixAOne = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(findMatrixTraceSum(matrixAOne));

const matrixATwo = [
  [0, 4, 9, 5],
  [8, 7, 3, 7],
  [4, 6, 8, 1],
  [4, 4, 0, 6],
];
console.log(findMatrixTraceSum(matrixATwo));

const matrixAThree = [
  [1, 0, 0, 0],
  [0, 2, 0, 0],
  [0, 0, 3, 0],
  [0, 0, 0, 4],
  [0, 0, 0, 5],
];

console.log(findMatrixTraceSum(matrixAThree));
