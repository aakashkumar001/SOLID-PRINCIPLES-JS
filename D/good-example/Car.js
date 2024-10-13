import IEngine from './IEngine.js';

class Car {
  constructor(engine) {
    if (!(engine instanceof IEngine)) {
      throw new Error("Invalid engine type. Must implement IEngine.");
    }
    this.engine = engine;
  }

  startCar() {
    this.engine.start();
    console.log("Car started.");
  }
}

export default Car;
