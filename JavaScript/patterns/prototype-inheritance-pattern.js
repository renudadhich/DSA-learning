// Prototype object
const carPrototype = {
  wheels: 4,
  start() {
    return 'Engine started';
  },
  stop() {
    return 'Engine stopped';
  }
};

// Car constructor function using Prototype
function Car(make, model) {
  this.make = make;
  this.model = model;
}

Car.prototype = carPrototype; // Set the prototype

// Creating instances using the prototype
const car1 = new Car('Toyota', 'Camry');
const car2 = new Car('Honda', 'Civic');

console.log(car1.wheels); // Output: 4
console.log(car2.wheels); // Output: 4

console.log(car1.start()); // Output: Engine started
console.log(car2.start()); // Output: Engine started

//using object.create
const bikePrototype = {
  wheels: 2,
  start() {
    return 'Bike engine started';
  },
  stop() {
    return 'Bike engine stopped';
  }
};

const bike1 = Object.create(bikePrototype);
bike1.make = 'Yamaha';
bike1.model = 'FZ';

console.log(bike1.wheels);//2