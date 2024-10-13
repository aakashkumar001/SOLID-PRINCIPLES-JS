import Engine from './engine.js';

class Car {
  constructor() {
    this.engine = new Engine(); // Direct dependency on Engine class
  }

  startCar() {
    this.engine.start();
    console.log("Car started.");
  }
}

export default Car;
