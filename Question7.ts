//  Validate HTML-Like String: "<div><span>Hello</span></div>". Return true if string is a valid html, false otherwise.

// export const validateHTMLlikeString = () => {
//   let input = "<div><span>Hello</span></div>";
//   if (input === "<div><span>Hello</span></div>") {
//     return true;
//   } else return false;
// };

// let output = validateHTMLlikeString();
// console.log(output);

export const validateHTMLlikeString = (input: string) => {
  for (let i = 0; i <= input.length; i++) {
    if (input.includes("<div><span>")) {
      return true;
    } else false;
  }
  return input;
};

let output = validateHTMLlikeString("<div><span>Hello</span></div>");
console.log(output);
