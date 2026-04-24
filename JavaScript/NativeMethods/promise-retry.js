// A function that simulates an unreliable network call that may fail randomly 
// and needs to be retried a certain number of times before giving up.
// The function returns a promise that resolves on success and rejects on failure.
// We will implement a retry mechanism for this promise-based function.     

const unreliableNetworkCall = () => {
  return new Promise((resolve, reject) => {
      console.log("method called")
    if (Math.random() > 0.7) resolve("Success!");
    else reject("Failed!");
  });
};

const retryPromise = async (fn, maxRetries) => {
    try {
        const result = await fn();
        return result;
    } catch(err) {
        if(maxRetries > 0) {console.log("retrying attempt", maxRetries-1)
           return retryPromise(fn, maxRetries-1)
        } else {
            console.log("error occured. !!")
        }
    }
}
 retryPromise(unreliableNetworkCall, 2).then((res)=>{
     console.log(res);
 }).catch((error)=>{
     console.log(error)
 })