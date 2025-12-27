// Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.

// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]

// Expected result : [15, -22, 47]

type MixedData = number | string | null | undefined | boolean;

const removeNullValues = (array: MixedData[]) => {
  return array.filter((item) => {
    return typeof item === "number" && item !== 0 && !isNaN(item);
  });
};

const sampleArray: MixedData[] = [
  NaN,
  0,
  15,
  false,
  -22,
  "",
  undefined,
  47,
  null,
];

console.log(removeNullValues(sampleArray));

