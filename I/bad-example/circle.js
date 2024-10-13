import IShape from '/IShape.js';

class Circle extends IShape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  volume() {
    throw new Error("Volume not applicable for 2D shapes.");
  }
}

export default Circle;
