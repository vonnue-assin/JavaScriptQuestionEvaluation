// Write a JavaScript program to list the properties of a JavaScript object.

import { sampleObjectProps } from "./types";

// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// // Sample Output: name,sclass,rollno

const getObjectKeys = (obj: sampleObjectProps) => {
  return Object.keys(obj);
};

var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};
console.log(getObjectKeys(student));

class Cylinder {
  private radius: number;
  private height: number;

  constructor(radius: number, height: number) {
    this.radius = radius;
    this.height = height;
  }

  getVolume(): number {
    const volume = Math.PI * Math.pow(this.radius, 2) * this.height;
    return parseFloat(volume.toFixed(4));
  }
}

const myCylinder = new Cylinder(5, 10);
console.log(`Volume: ${myCylinder.getVolume()}`);
