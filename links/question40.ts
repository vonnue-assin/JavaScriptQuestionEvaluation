// A string consists of digits ranging from 2 to 9, inclusive. Write a JavaScript program to get all possible letter combinations that represent the number using recursion.

const PHONE_MAP: Record<string, string> = {
  "2": "abc",
  "3": "def",
  "4": "ghi",
  "5": "jkl",
  "6": "mno",
  "7": "pqrs",
  "8": "tuv",
  "9": "wxyz",
};

const letterCombinations = (digits: string) => {
  if (!digits || digits.length === 0) {
    return [];
  }

  const result: string[] = [];

  const backtrack = (index: number, currentStr: string) => {
    if (index === digits.length) {
      result.push(currentStr);
      return;
    }

    const letters = PHONE_MAP[digits[index]];

    for (const char of letters) {
      backtrack(index + 1, currentStr + char);
    }
  };
  backtrack(0, "");
  return result;
};

console.log(letterCombinations("23"));
console.log(letterCombinations("2"));
console.log(letterCombinations("8"));
