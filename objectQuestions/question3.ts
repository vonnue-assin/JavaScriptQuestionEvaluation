// Write a JavaScript program to get the length of a JavaScript object.

import { sampleObjectProps } from "./types";

var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

const lengthOfObject = (obj: sampleObjectProps) => {
  const length = Object.keys(obj).length;
  return length;
};

console.log(lengthOfObject(student));
