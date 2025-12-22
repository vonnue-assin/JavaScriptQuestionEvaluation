// 3. Convert file size in bytes to human readable text.

// Input: 1500
// Output: "1.46 KB"

export const ConvertBytesToHumanReadableFormat = (input: number): string => {
  if (input === 0) {
    return "0 Bytes";
  }
  const units = ["Bytes", "KB", "MB", "GB", "TB"];
  const binaryNumber = 1024;

  const integer = Math.floor(Math.log(input) / Math.log(binaryNumber));
  const value = input / Math.pow(binaryNumber, integer);

  return `${value.toFixed(2)} ${units[integer]}`;
};

console.log(ConvertBytesToHumanReadableFormat(1024));
console.log(ConvertBytesToHumanReadableFormat(1500));
