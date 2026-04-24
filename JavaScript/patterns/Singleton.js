//
// The Singleton Pattern ensures that a class has only one instance
// and provides a global point of access to that instance.
// This pattern is useful when exactly one object is needed to coordinate actions across the system.    
class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;
    this.state = "initial state";
  }

  getState() {
    return this.state;
  }

  setState(newState) {
    this.state = newState;
  }
}

const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2); // Output: true
instance1.setState("new state");
console.log(instance2.getState()); // Output: "new state"

//example 2 logger class singleton pattern
class Logger {
  constructor() {
    if (Logger.instance) {
      return Logger.instance;
    }
    Logger.instance = this;
    this.logs = [];
  }

  log(message) {
    this.logs.push(message);
    console.log(`LOG: ${message}`);
  }

  printLogCount() {
    console.log(`${this.logs.length} Logs`);
  }
}

const logger1 = new Logger();
const logger2 = new Logger();

logger1.log("First log");
logger2.log("Second log");

logger1.printLogCount(); // Output: 2 Logs
logger2.printLogCount(); // Output: 2 Logs

console.log(logger1 === logger2); // Output: true