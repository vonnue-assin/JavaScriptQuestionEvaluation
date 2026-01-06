const checkIfInstanceOfClass = (obj: any, classTarget: any) => {
  if (
    classTarget === null ||
    classTarget === undefined ||
    typeof classTarget !== "function"
  ) {
    return false;
  }

  if (obj === null || obj === undefined) {
    return false;
  }

  let currPrototype = Object.getPrototypeOf(Object(obj));

  while (currPrototype !== null) {
    if (currPrototype === classTarget.prototype) {
      return true;
    }

    currPrototype = Object.getPrototypeOf(currPrototype);
  }

  return false;
};

class Animal {}
class Dog extends Animal {}

console.log(checkIfInstanceOfClass(new Dog(), Animal));
console.log(checkIfInstanceOfClass(5, Number));
console.log(checkIfInstanceOfClass(5, Object));
console.log(checkIfInstanceOfClass(null, Object));
console.log(checkIfInstanceOfClass(Date, Function));
