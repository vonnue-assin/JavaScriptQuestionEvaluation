// Return the first number that appears more than once, based on the order of appearance.

const firstNumberAppearOnce = (num: number[]) => {
  let repeatedNumber = new Set();
  for (let i = 0; i <= num.length; i++) {
    if (repeatedNumber.has(num[i])) {
      return num[i];
    }
    repeatedNumber.add(num[i]);
  }
  return repeatedNumber;
};
const numberArray = firstNumberAppearOnce([1, 2, 5, 7, 8, 9, 8, 10, 1]);
console.log(numberArray);

// const apiResponse = [ { id: 1, type: "hardware", price: 100 }, { id: 2, type: "subscription", price: 50 }, { id: 3, type: "hardware", price: 200 } ];
// Group by type
//  Calculate total price per type
// const output = {
//   hardware: 300,
//   subscription: 50
// }

type dataprops = {
  id: number;
  type: string;
  price: number;
};

const groupedData = (array: dataprops[]) => {
  return array.reduce((acc, item) => {
    if (!acc[item.type]) {
      acc[item.type] = 0;
    }
    acc[item.type] += item.price;
    return acc;
  }, {});
};

const output = groupedData([
  { id: 1, type: "hardware", price: 100 },
  { id: 2, type: "subscription", price: 50 },
  { id: 3, type: "hardware", price: 200 },
]);
console.log(output);

