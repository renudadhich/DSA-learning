/** using closures */
function mySetInterval(callback, delay) {
  let clears = [];

  // NOTE: A recursive function which gets called after **delay**
  (function recFun() {
    clears.push(setTimeout(() => {
      callback();
      recFun();
    }, delay));
  }())


  return  () => {
    for (let i = 0; i < clears.length; i++) {
      clearTimeout(clears[i]);
    }
  };
}

// To Test
let count = 1;
let clear = mySetInterval(() => {
  console.log("hello world", count++);
}, 1000);


setTimeout(() => {
  clear();
}, 5000);

/** approach 2  */
(function(window) {
    let interval = {}
    window.setInterval = function(fun, delay) {
      let rndId = Math.floor(Math.random() * 1000);
      const execute = function() {
        let id = setTimeout(() => {
          fun();
          execute();
        }, delay)
  
        if (!interval[rndId]) {
          interval[rndId] = []
        }
  
        interval[rndId].push(id)
        console.log(rndId, interval[rndId])
      }
  
      execute();
  
      return rndId;
    }
  
    window.clearInterval = function(rid) {
      console.log("Rid and Interval", rid, interval)
      while (interval[rid].length > 0) {
        console.log(interval[rid])
        clearTimeout(interval[rid].pop());
      }
    }
  }(window))
  
  // test
  const pid = setInterval(() => {
    console.log("Hello world");
  }, 2000);
  
  console.log("PID", pid)
  
  
  setTimeout(() => {
    clearInterval(pid)
  }, 10000)