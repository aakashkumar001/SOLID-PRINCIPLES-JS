class Shape {
    constructor(type, radius, length, width) {
      this.type = type;
      this.radius = radius;
      this.length = length;
      this.width = width;
    }
  
    calculateArea() {
      switch (this.type) {
        case 'Circle':
          return Math.PI * Math.pow(this.radius, 2);
        case 'Rectangle':
          return this.length * this.width;
        default:
          throw new Error("Unsupported shape type.");
      }
    }
  }
  
  export default Shape;
  