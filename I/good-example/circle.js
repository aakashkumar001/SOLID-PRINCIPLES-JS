import IShape2D from './IShape2D.js';

class Circle extends IShape2D {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

export default Circle;
