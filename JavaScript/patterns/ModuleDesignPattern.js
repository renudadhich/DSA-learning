//The Module Pattern is used to encapsulate and organize code into self-contained, 
// reusable modules. This pattern is particularly useful for managing 
// private and public data and methods, preventing global namespace pollution.

const Module = (function() {
  // Private variable
  let privateVar = "I am private";

  // Private function
  function privateMethod() {
    console.log(privateVar);
  }

  return {
    // Public variable
    publicVar: "I am public",

    // Public function
    publicMethod() {
      console.log("Accessing private method:");
      privateMethod();
    }
  };
})();

console.log(Module.publicVar); // Output: I am public
Module.publicMethod(); // Output: Accessing private method: I am private