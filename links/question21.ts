// / Write a JavaScript program to generate all permutations of an array's elements (including duplicates).

const getPermutationsArrays = (array: number[]) => {
  const result: number[][] = [];

  const permute = (currentArray: number[], start: number) => {
    if (start === currentArray.length) {
      result.push([...currentArray]);
      return;
    }

    for (let i = start; i < currentArray.length; i++) {
      [currentArray[start], currentArray[i]] = [
        currentArray[i],
        currentArray[start],
      ];

      permute(currentArray, start + 1);

      [currentArray[start], currentArray[i]] = [
        currentArray[i],
        currentArray[start],
      ];
    }
  };

  permute([...array], 0);
  return result;
};

const input = [1, 2, 3];
const perms = getPermutationsArrays(input);

console.log(perms);

const inputs = [4, 5, 6, 7];
const permsOne = getPermutationsArrays(inputs);

console.log(permsOne);

const inputsTwo = [1, 3];
const permsTwo = getPermutationsArrays(inputsTwo);

console.log(permsTwo);
