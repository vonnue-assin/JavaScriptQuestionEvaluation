// Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.

import { sampleObjectProps } from "./types";

const deleteProperty = (obj: sampleObjectProps) => {
  console.log("Before:", obj);

  delete obj.rollno;

  console.log("After:", obj);
};

var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

deleteProperty(student);
