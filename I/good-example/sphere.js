import IShape3D from './IShape3D.js';

class Sphere extends IShape3D {
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
