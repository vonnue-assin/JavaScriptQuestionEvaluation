//find the longest consecutive zeroes in a binary string

const countConsecutiveZeroes = (binaryZeroString: string) => {
  let maxCount = 0;
  let currentCount = 0;

  for (let i = 0; i <= binaryZeroString.length; i++) {
    if (binaryZeroString[i] === "0") {
      currentCount++;
      maxCount = Math.max(maxCount, currentCount);
    } else {
      currentCount = 0;
    }
  }
  return maxCount;
};

console.log(countConsecutiveZeroes("1235600800009"));
console.log(countConsecutiveZeroes("123560080000900000000"));
console.log(countConsecutiveZeroes("123560080009"));
console.log(countConsecutiveZeroes("12300005600800090"));
