class rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    return this.width * this.height;
  }

  calculatePerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

const myRectangle = new rectangle(12, 13);

const areas = myRectangle.calculateArea();
const perimeters = myRectangle.calculatePerimeter();

console.log(`Rectangle Area: ${areas}`);
console.log(`Rectangle Perimeter: ${perimeters}`);
