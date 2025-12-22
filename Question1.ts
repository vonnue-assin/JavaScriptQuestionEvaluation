//  Write a function that sorts an array of strings in alphabetical order.

const sortArrayOfStrings = (array: string[]) => {
  return array.sort((a, b) => {
    return a.localeCompare(b);
  });
};

const res = sortArrayOfStrings(["apple", "orange", "mango", "zoo", "ant"]);
console.log(res);

//find the smallest number from the array

const smallestNumber = (array: number[]) => {
  if (array.length === 0) return null;

  let smallestNumber = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < smallestNumber) {
      smallestNumber = array[i];
    }
  }
  return smallestNumber;
};

const smallestNum = smallestNumber([34, 27, 87, 90, 76, 9]);
console.log(smallestNum);

//find the duplicate numbers from an array

const duplicateNumbers = (array: number[]) => {
  const duplicates = new Set(array);
  return duplicates;
};

const duplicates = duplicateNumbers([
  12, 31, 56, 87, 90, 6, 12, 16, 18, 16, 90, 90,
]);
console.log(duplicates);

//Write a function to reverse an array of elements

const reversedArrayOfElements = (array: number[]) => {
  let reversedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
};

const reversedArray = reversedArrayOfElements([2, 4, 6, 8, 10]);
console.log(reversedArray);

//Find the longest word in the string

const longestWord = (sentence: string) => {
  const words = sentence.split(" ");
  let longestWord = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
};

const longestWordHere = longestWord("I love javaScript programming");
console.log(longestWordHere);
