// Write a function that checks if a given value is an instance of a given class or superclass. For this problem, an object is considered an instance of a given class if that object has access to that class's methods.

// There are no constraints on the data types that can be passed to the function. For example, the value or the class could be undefined

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
