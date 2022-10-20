//es6
class Shape {
  constructor(num) {
    this.name = "shape";
    this.num_of_edge = num;
  }
  toString1() {
    console.log(this.name);
  }
}
class TwoDShape extends Shape {
  constructor(num) {
    super(num);
    this.name = "2D shape";
  }
}
class Triangle extends TwoDShape {
  constructor(num, side, height) {
    super(num);
    this.name = "triangle";
    this.side = side;
    this.height = height;
  }
  getArea() {
    const area = (this.side * this.height) / 2;
    console.log(area);
  }
}

const tri = new Triangle(3, 7, 4);
tri.getArea();
tri.toString1();
console.log(tri.num_of_edge);
const twoDShape = new TwoDShape();
twoDShape.toString1();
