 function promiseAll(iterable) {
    return new Promise((resolve, reject) => {
      const results = new Array(iterable.length);
      let unresolved = iterable.length;
  
      if (unresolved === 0) {
        resolve(results);
        return;
      }
  
      iterable.forEach(async (item, index) => {
        try {
          const value = await item;
          results[index] = value;
          unresolved -= 1;
  
          if (unresolved === 0) {
            resolve(results);
          }
        } catch (err) {
          reject(err);
        }
      });
    });
  }

  {
  // Resolved example.
const p0 = Promise.resolve(3);
const p1 = 42;
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 100);
});

 promiseAll([p0, p1, p2]).then((res)=> {
    console.log(res);
}); // [3, 42, 'foo']

  }
{
// Rejection example.
const p0 = Promise.resolve(30);
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('An error occurred!');
  }, 100);
});

try {
   promiseAll([p0, p1]).then((res) =>{

   }).catch((Err) =>{
    console.log("err", Err);
   });
} catch (err) {
  console.log(err); // 'An error occurred!'
}
}

/** Promises.race */
/** Promises.any */
/** Promises.allSettled */
