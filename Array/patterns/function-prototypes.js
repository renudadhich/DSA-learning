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

/** custome ca;;  */
const isOBject = obj => {
    const type = typeof obj;
    return type === "function" || (type === "object" && !!obj);
};

const getRandomKey = () => {
    return (
    [...Array(10)].map(_ => ((Math.random() * 36) | 0).toString(36)).join`` ||
    {}
  );
};

const checkRandomKey = (key, obj) => (obj[key] === undefined) ? key : checkRandomKey(getRandomKey(), obj);

if(!Function.prototype.fauxCall){
    Function.prototype.fauxCall = function(_context) {
       const context = isOBject(_context) ? _context : {};
       const fnName = checkRandomKey(getRandomKey(), context);
       const args = Array.from(arguments).slice(1);
       context[fnName] = this;
       const result = context[fnName](...args);
       delete context[fnName];
       return result;
    };
}

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.fauxCall(this, name, price);
  this.category = "food";
}
const add = (a, b) => a + b;

console.log(new Food("cheese", 5)); // {name: 'chees', price: 5, category: 'food'}
console.log(add.fauxCall(null, 5, 6, 7));

/** custome apply */

if(!Function.prototype.fauxApply){
    Function.prototype.fauxApply = function(_context, _args) {
        const context = isOBject(_context) ? _context : {};
        const fnName = checkRandomKey(getRandomKey(), context);
        const args = _args.length ? _args : []
        context[fnName] = this;
        const result = context[fnName](...args);
        delete context[fnName];
        return result;
    };
}
const numbers = [5, 6, 7];

console.log(new Food("cheese", 5)); // {name: 'chees', price: 5, category: 'food'}
console.log(add.fauxApply(null, 5, 6, 7));


const throttling =  (fn, delay) => {
  let throttle = false;
  if(!throttle) {
    throttle = true;
    fn();
  }
setTimeout(() => throttle = false , delay);
}
const myfn = () => console.log("debouce called");
throttling(myfn, 1000);
throttling(myfn, 1000);
throttling(myfn, 1000);
throttling(myfn, 1000);