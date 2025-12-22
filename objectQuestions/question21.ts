//Capitalize the First Letter of Each Word in a Sentence in JavaScript?

const capitalizeFirstWord = (sentence: string) => {
  const splitWords = sentence.split(" ");

  const capitalizedWords = splitWords.map((word) => {
    if (word.length === 0) {
      return word;
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLocaleLowerCase();
  });
  return capitalizedWords.join(" ");
};

const wordsResult = capitalizeFirstWord("welcome to the world of coding");
console.log(wordsResult);
