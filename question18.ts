//Write a function to reverse the string

const reversedString = (sentence: string) => {
  let output = "";
  for (let i = sentence.length - 1; i >= 0; i--) {
    output += sentence[i].toLocaleLowerCase;
  }
  if (output === sentence) {
    return true;
  } else return false;
};

const out = reversedString("malayalam");
const put = reversedString("reversedString");
console.log(out);
console.log(put);
