import IShape from '/IShape.js';

class Sphere extends IShape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return 4 * Math.PI * Math.pow(this.radius, 2);
  }

  volume() {
    return (4 / 3) * Math.PI * Math.pow(this.radius, 3);
  }
}

export default Sphere;
