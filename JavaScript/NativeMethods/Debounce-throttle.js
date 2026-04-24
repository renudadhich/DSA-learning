function debounce(func, delay) {
  let timer; 
  return function(...args) {
    clearTimeout(timer); 
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay); 
  }; 
}

const myDebounceFn = debounce(() => console.log("debounce called"), 1000);

myDebounceFn();
myDebounceFn();
myDebounceFn();

const throttling =  (fn, delay) => {
  let throttle = false;
  if(!throttle) {
    throttle = true;
    fn();
  }
setTimeout(() => throttle = false , delay);
}
const myfn = () => console.log("throttle called");
throttling(myfn, 1000);
throttling(myfn, 1000);
throttling(myfn, 1000);
throttling(myfn, 1000);