const toNestedObjects = (data: string): any => {
  if (!Array.isArray(data)) return data;
  if (data.length === 0) return data;

  const isObjectStructure = data.every(
    (item) =>
      (Array.isArray(item) && typeof item[0] === "string") ||
      typeof item === "string"
  );

  if (isObjectStructure) {
    const obj: Record<string, String> = {};

    for (let i = 0; i < data.length; i++) {
      const current = data[i];

      if (Array.isArray(current)) {
        const [key, ...rest] = current;

        const val = rest.length === 1 ? rest[0] : rest;
        obj[key] = toNestedObjects(val);
      } else {
        const key = current;
        const nextValue = data[i + 1];
        obj[key] = toNestedObjects(nextValue);
        i++;
      }
    }
    return obj;
  }

  return data.map(toNestedObjects);
};

const NestedArrays = [
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

console.log(JSON.stringify(toNestedObjects(NestedArrays), null, 2));
