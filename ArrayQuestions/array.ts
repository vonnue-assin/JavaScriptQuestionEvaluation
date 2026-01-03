let array = [1, 2, 3];
let newArray = new Array(1, 8, 10, 14);
console.log(newArray);

let arr = Array.of(2, 6, 8, 10, 12, 16);
console.log(arr);

const fruits = ["apple", "orange"];
fruits.push("mango");
fruits.unshift("grapes"); // adds at the front of the array
console.log(fruits);

const vegatables = ["broccoli", "beans", "bittergoud", "green peas"];
vegatables.pop();
console.log(vegatables);

const vegetables = ["broccoli", "beans", "bittergoud", "green peas"];
const updated = vegetables.filter((v) => v !== "beans");

console.log(updated);

let fruit = ["apple", "banana", "cherry"];
let fruitString = fruit.join(", ");
console.log(fruitString);
