function memoize(func) {
    const cache = {}; 
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            console.log("Cached Result")
            return cache[key];
        }
        const result = func.apply(this, args);
        cache[key] = result;
        return result;
    };
}

function square(number) {
console.log("Computing...");
return number * number;
}  
const memoizedSquare = memoize(square);  
console.log(memoizedSquare(4)); // Output: Computing... 16
console.log(memoizedSquare(4)); // Output: Cached Result 16
console.log(memoizedSquare(5)); // Output: Computing... 25
console.log(memoizedSquare(5)); // Output: Cached Result 25