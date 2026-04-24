//The Factory Design Pattern is a creational design pattern that provides a 
// way to create objects without specifying the exact class of the object that will be created. It defines an interface for creating an object but allows subclasses to alter the type of objects that will be created.
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  draw() {
    console.log(`Drawing a Circle with radius ${this.radius}`);
  }
}

class Square {
  constructor(side) {
    this.side = side;
  }

  draw() {
    console.log(`Drawing a Square with side ${this.side}`);
  }
}

class ShapeFactory {
  static createShape(type, size) {
    switch (type) {
      case 'circle':
        return new Circle(size);
      case 'square':
        return new Square(size);
      default:
        throw new Error('Shape type not supported.');
    }
  }
}

const circle = ShapeFactory.createShape('circle', 5);
const square = ShapeFactory.createShape('square', 4);

circle.draw(); // Output: Drawing a Circle with radius 5
square.draw(); // Output: Drawing a Square with side 4