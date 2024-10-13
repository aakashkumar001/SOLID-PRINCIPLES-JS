class IShape {
    area() {
      throw new Error("Method 'area()' must be implemented.");
    }
  
    volume() {
      throw new Error("Method 'volume()' must be implemented.");
    }
  }
  
  export default IShape;
  