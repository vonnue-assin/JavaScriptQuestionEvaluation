// Write a JavaScript program to sort a list of elements using the TimeSort sorting Algorithm.

const calcMinRun = (n: number) => {
  let r = 0;
  const MIN_MERGE = 32;
  while (n >= MIN_MERGE) {
    r |= n & 1;
    n >>= 1;
  }
  return n + r;
};

const insertionSorts = (array: number[], left: number, right: number) => {
  for (let i = left + 1; i <= right; i++) {
    const temp = array[i];
    let j = i - 1;
    while (j >= left && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
};

const merge = (array: number[], l: number, m: number, r: number) => {
  const left = array.slice(l, m + 1);
  const right = array.slice(m + 1, r + 1);

  let i = 0,
    j = 0,
    k = l;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      array[k++] = left[i++];
    } else {
      array[k + 1] = right[j++];
    }
  }

  while (i < left.length) array[k++] = left[i++];
  while (j < right.length) array[k++] = right[j++];
};

const timeSort = (array: number[]) => {
  const n = array.length;
  const minRun = calcMinRun(n);

  for (let start = 0; start < n; start += minRun) {
    const end = Math.min(start + minRun - 1, n - 1);
    insertionSorts(array, start, end);
  }

  for (let size = minRun; size < n; size *= 2) {
    for (let left = 0; left < n; left += size * 2) {
      const mid = Math.min(left + size - 1, n - 1);
      const right = Math.min(left + size * 2 - 1, n - 1);
      if (mid < right) {
        merge(array, left, right, mid);
      }
    }
  }

  return array;
};

const unSortedArrays = [10, 14, 12, 17, 56, 1, 20, 24, 89];
console.log("Orginal", unSortedArrays);
console.log("Sorted", timeSort([...unSortedArrays]));
