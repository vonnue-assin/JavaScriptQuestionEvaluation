// 3. Write a program that determines if a string is an anagram of another string. An anagram is a word or phrase formed by rearranging the letters of another word or phrase.

const anagramFunction = (str1: string, str2: string) => {
  const normalize = (str: string) => {
    str = str.toLocaleLowerCase();
    let result = "";

    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (char >= "a" && char <= "z") {
        result += char;
      }
    }
    return result;
  };

  const sorted = (str: string) => normalize(str).split("").sort().join("");

  return sorted(str1) === sorted(str2);
};

const newWord = anagramFunction("elepahant", "letters");
const checkWord = anagramFunction("elephant", "ant");
console.log(checkWord);
console.log(newWord);
