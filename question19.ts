//write a paliandrome function

const paliandrome = (sentence: string) => {
  let correctSentence = sentence.toLocaleLowerCase();
  let reversedSentence = "";
  for (let i = sentence.length - 1; i >= 0; i--) {
    reversedSentence += sentence[i].toLocaleLowerCase();
  }
  return correctSentence === reversedSentence;
};

const outs = paliandrome("Malayalam");
const puts = paliandrome("reversedString");
console.log(outs);
console.log(puts);

//write a function to count the vowels

const countVowels = (str: string) => {
  let vowels = "aeiouAEIOU";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
};

const vowels = countVowels("Astrounet");
console.log(vowels);

//Find the power of numbers

const powerOfNumbers = (base: number, exponential: number) => {
  return base ** exponential;
};

console.log(powerOfNumbers(2, 8));
console.log(powerOfNumbers(1, 1));
console.log(powerOfNumbers(2, 2));
console.log(powerOfNumbers(2, 0));

//Write a Program to count the occurrences of a character in a string in JavaScript

const charectorOccurences = (sentence: string, str: string) => {
  let count = 0;
  for (let i = 0; i <= sentence.length; i++) {
    if (sentence[i] === str) {
      count++;
    }
  }
  return count;
};

console.log(charectorOccurences("elephant", "e"));
console.log(charectorOccurences("egg", "g"));
console.log(charectorOccurences("jkgggrowlings", "g"));
