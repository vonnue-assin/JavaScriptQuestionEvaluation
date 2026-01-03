const mergeSort = (array: number[]): number[] => {
  if (array.length <= 1) {
    return array;
  }

  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  return mergeSort(mergeSort(left), mergeSort(right));
};

const merge = (left: number[], right: number[]) => {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if  (length )
};
