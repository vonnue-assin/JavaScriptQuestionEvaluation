// Write a JavaScript function to get a copy of the object where the keys become the values and the values are the keys.

const invertObject = (obj: number | any) => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
  }, {});
};

const statusCodes = {
  200: "OK",
  404: "Not Found",
  500: "Internal Server Error",
};

const invertedCodes = invertObject(statusCodes);
console.log(statusCodes);
console.log(invertedCodes);
