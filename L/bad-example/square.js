import Rectangle from './rectangle.js';

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }

  set width(value) {
    this.width = this.height = value;
  }

  set height(value) {
    this.height = this.width = value;
  }
}

export default Square;
