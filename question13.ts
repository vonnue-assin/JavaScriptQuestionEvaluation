// Write a program that takes a sentence as input and returns the word count.

const wordCount = (sentence: string) => {
  if (!sentence) return null;

  let count = 1;
  for (let i = 0; i <= sentence.length; i++) {
    if (sentence[i] === " ") count++;
  }
  return count;
};

const resultSentence = wordCount("My name is Anna. I hail from England");
const results = wordCount("I am your big fan");
console.log(resultSentence);
console.log(results);
