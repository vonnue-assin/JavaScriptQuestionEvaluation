//Write a JavaScript function to retrieve all the names of an object's own and inherited properties.

const getAllEnumerableProperties = (object: object) => {
  const keys: string[] = [];

  for (const key in object) {
    keys.push(key);
  }
  return keys;
};

const sample = Object.create({ inheritedKey: "value" });
sample.ownKey = "anotherValue";
console.log(getAllEnumerableProperties(sample));
