// Write a JavaScript program to sort a list of elements using BogoSort

//In CS bogosort is a particular inffective sorting algorithm based on the generate and test paradigm.The algorithm successively generates permutations of its input until it finds one that is sorted.

const isSorted = (array: number[]) => {
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) {
      return false;
    }
  }
  return true;
};

const shuffle = (array: number[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const bogosort = (array: number[]) => {
  const result = [...array];

  while (!isSorted(result)) {
    shuffle(result);
  }

  return result;
};

const unsortedArrays = new Set([9, 2, 1, 17, 18, 15, 8, 0, 9, 7]);

console.log("Orginal :", unsortedArrays);
console.log("Sorted:", bogosort([...unsortedArrays]));
