// Write a JavaScript function to create an array of arrays, ungrouping the elements in an array produced by zip.

const unzip = (array: any[][]) =>
  array.reduce(
    (acc, value) => (value.forEach((v, i) => acc[i].push(v)), acc),
    Array.from({ length: Math.max(...array.map((x) => x.length)) }).map(
      () => []
    )
  );

const rest = unzip([
  ["a", 1, true],
  ["b", 2, false],
]);
const set = unzip([
  ["a", 1, true],
  ["b", 2],
]);
console.log(rest);
console.log(set);
