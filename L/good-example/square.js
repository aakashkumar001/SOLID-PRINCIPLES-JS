import Shape from './shape.js';

class Square extends Shape {
  constructor(sideLength) {
    super();
    this.sideLength = sideLength;
  }

  get area() {
    return this.sideLength * this.sideLength;
  }

  set sideLength(value) {
    this.sideLength = value;
  }
}

export default Square;
