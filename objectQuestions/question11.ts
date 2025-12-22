//Write a JavaScript function to print all the methods in a JavaScript object.

// Test Data :
// console.log(all_properties(Array));
[
  "length",
  "name",
  "arguments",
  "caller",
  "prototype",
  "isArray",
  "observe",
  "unobserve",
];

const all_properties = (obj: ArrayConstructor) => {
  return Object.getOwnPropertyNames(obj);
};

console.log(all_properties(Array));
