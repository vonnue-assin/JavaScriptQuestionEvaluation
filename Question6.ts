// 6. Develop a string compression tool.

export const compressionTool = (value: string) => {
  let output = "";
  let count = 1;
  for (let i = 0; i <= value.length; i++) {
    if (value[i] === value[i + 1]) {
      count++;
    } else {
      output += value[i] + count;
      count = 1;
    }
  }
  return output;
};

let input = compressionTool("aaddvvvccchhhhhhyytttt");
console.log(input);

export const decompressionTool = (value: string) => {
  let output = "";

  for (let i = 0; i < value.length; i += 2) {
    const char = value[i];
    const count = Number(value[i + 1]);

    output += char.repeat(count);
  }

  return output;
};

let toolinput = decompressionTool("a3b2c1");
console.log(toolinput);
