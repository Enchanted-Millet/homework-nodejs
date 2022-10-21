//-----------PROBLEM 1--------------
//1
class Shape {
  constructor(type) {
    this.type = type;
  }
  getType() {
    console.log(this.type);
  }
}

const shape = new Shape("square");
shape.getType();

//2
class Triangle extends Shape {
  constructor(a, b, c) {
    super("triangle");
    this.a = a;
    this.b = b;
    this.c = c;
  }
}
const tri = new Triangle(3, 4, 5);
tri.getType();
//3
Triangle.prototype.getPerimeter = function () {
  const n = this.a + this.b + this.c;
  console.log(n);
};

tri.getPerimeter();

//4,5
var t = new Triangle(1, 2, 3);
console.log(t.constructor === Triangle);
console.log(Shape.prototype.isPrototypeOf(t));
t.getType();
t.getPerimeter();

//----------PROBLEM 2---------------

Array.prototype.shuffle = function () {
  for (let i = 0; i < this.length; i++) {
    let randomIdx = Math.floor(Math.random() * i);
    [this[randomIdx], this[i]] = [this[i], this[randomIdx]];
  }
  console.log(this.toString());
};

[1, 2, 3, 4, 5, 6, 7, 8, 9].shuffle();
