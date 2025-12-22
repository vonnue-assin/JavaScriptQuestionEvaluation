//Convert a nested array into an object

const nestedArrayToObject = (
  array: Iterable<readonly [PropertyKey, any]> | string[][]
) => {
  const nestedArray = Object.fromEntries(array);
  return nestedArray;
};

const arrayObject = nestedArrayToObject([
  ["doe", "buck"],
  ["ewe", "ram"],
  ["hen", "rooster"],
]);

console.log(arrayObject);

const nestedArray = [
  [
    "user",
    [
      ["id", 101],
      ["name", "John"],
    ],
  ],
  [
    "settings",
    [
      ["theme", "dark"],
      ["notifications", true],
    ],
  ],
];

const NestedArray = [
  "name",
  "Jon Doe",
  [
    "address",
    ["permanent", ["country", "India"], ["state", "Kerala"], ["pin", 888222]],
    [
      "temporary",
      ["country", "India"],
      ["state", "Tamilnadu"],
      ["pin", 3112223],
    ],
  ],
  ["primaryLanguages", "Malayalam"],
];

const toNestedObject = (array: any[]): Record<string, string> => {
  return Object.fromEntries(
    array.map(([key, value]) => [
      key,
      Array.isArray(value) ? toNestedObject(value) : value,
    ])
  );
};

console.log(toNestedObject(nestedArray));
console.log(toNestedObject(NestedArray));
