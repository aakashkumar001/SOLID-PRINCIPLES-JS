import Shape from './shape.js';

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }
}

export default Rectangle;

  