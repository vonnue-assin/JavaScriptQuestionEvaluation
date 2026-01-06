// Write a function that checks if a given value is an instance of a given class or superclass. For this problem, an object is considered an instance of a given class if that object has access to that class's methods.

// There are no constraints on the data types that can be passed to the function. For example, the value or the class could be undefined

function checkIfInstanceOf(obj: any, classTarget: any): boolean {
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
}

console.log(checkIfInstanceOf(new Dog(), Animal));
console.log(checkIfInstanceOf(5, Number));
console.log(checkIfInstanceOf(5, Object));
console.log(checkIfInstanceOf(null, Object));
console.log(checkIfInstanceOf(Date, Function));
