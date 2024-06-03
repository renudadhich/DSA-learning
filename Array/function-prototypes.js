var person = {
    name: "renu",
    displayName : function (state, age) {
        console.log("name is", this.name, state, age);
    }
};
var bound = person.displayName.bind({name: "ram"}, "karnataka");
// bound(37);


Function.prototype.customBind = function (obj, ...arguments) {
    var fn = this;
    var arg1 = arguments;
   return  function (...newArgs) {
        fn.apply(obj, [...arg1, ...newArgs]);
   } 
}
var bound = person.displayName.customBind({name: "ram"}, "karna");
bound(34);