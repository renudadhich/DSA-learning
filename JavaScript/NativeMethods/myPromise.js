
//reference : https://medium.com/swlh/implement-a-simple-promise-in-javascript-20c9705f197a

const STATE = {
    PENDING: "PENDING",
    FULLFILLED: "FULLFILLED",
    REJECTED:"REJECTED"
}
class MyPromise {
  constructor(callback) {
    this.status = "pending";
    this.rejectCallbacks = [];
    this.resolveCallbacks = [];
    this.value = "";
    const executeCallBacks = (val) => {
        if(this.isFunction(val?.then)) {   // sub promise chaining not working
            val.then(resolve, reject);
            return;
        }
      if(this.status === STATE.FULLFILLED) {
          this.resolveCallbacks.forEach((callback) => callback(val));
      }
      if(this.status === STATE.REJECTED) {
        this.rejectCallbacks.forEach((callback) => callback(val));
    }
    }
   
  const resolve = (value) => {
    this.status = STATE.FULLFILLED;
    this.value = value;
    try {
    executeCallBacks(value)
    } catch(error) {
       reject(val);
    }
    }
   const reject = (value) => {
     this.status  = STATE.REJECTED;
     this.value = value;
     executeCallBacks(value)
    }
    callback(resolve, reject)
  }
  

    isFunction = (value) => typeof value === 'function';

   then(successCallback, errorCallback) {
       return new MyPromise((nextResolve, nextReject) => {
        
         this.resolveCallbacks.push((result) => {   // this is for promise chaining
             if(this.isFunction(successCallback)) {
                const resolvePromise = successCallback(this.value);
                if(this.isFunction(resolvePromise?.then)) {
                    resolvePromise.then(nextResolve, nextReject);
                } else {
                nextResolve(resolvePromise);
                }
            } else {
                nextResolve(this.value)
            }
            
         });
         this.rejectCallbacks.push((result) => {
            if(this.isFunction(errorCallback)) {
                const rejectPromie = errorCallback(result);
                if(this.isFunction(rejectPromie?.then)) {
                    rejectPromie.then(nextResolve, nextReject);
                } else {
                nextReject(rejectPromie);
                }
            } else {
                nextReject(result)
            }
            
         });
    });
    // if(successCallback && this.isFunction(successCallback)) {   // this is for one level chaiing promise implementation
    //   this.resolveCallbacks.push(successCallback)
    // } 
    // if(errorCallback && this.isFunction(errorCallback)) {
    //    this.rejectCallbacks.push(errorCallback)
    //   }
  }
  catch(errorCallback) {
    return this.then(null, errorCallback);
  }
  finally(finallyCallback) {
   this.then((result) => {
    finallyCallback();
    return result;
   }, (error)=> {
    finallyCallback();
    return error;
   })
  }
}
/** simple promise testing*/
// {
// const promise =  new MyPromise((resolve, reject)=>{
//     setTimeout(()=> {
//    reject("opps simple promise error");
//     },0)
//  });

//  promise.then((val)=> console.log(val));
//  promise.then((val)=> console.log(val));
//  promise.then((val)=> console.log(val));
//  promise.catch((val)=> console.log(val));
// }
// {
// /**** chaining promise testing*/
// const promise =  new MyPromise((resolve, reject)=>{
//     setTimeout(()=> {
//    resolve("chain promise!!");
//     },0)
//  });
 
//  promise.then((val)=> {
//      console.log("T1", val);
//      return "via T1"+ val;
//  }).then((val2) => {
//     console.log("T2", val2)
//     return val2;
//  }).catch((error) =>{
//     console.log("via direct",error)
//  });
// }

{
    /**** sub promise chaining testing*/
    const promise =  new MyPromise((resolve, reject)=> {
        setTimeout(()=> {
       resolve("chain promise!!");
        },0)
     });
     
     promise.then((val)=> {
         console.log("simple", val);
         return  val;
     }).then((val2) => {
        console.log("chain T2:", val2)
        return new MyPromise((resolve, reject) => {
            setTimeout(()=>{
                resolve("from P1");
            }, 1000)
            
        });
     }).then((val3) => {
        console.log("T3", val3)
        // return val3;
     }).catch((error) =>{
        console.log("via direct",error)
     });
    }

    // /**** finally chaining promise testing*/
// {
// const promise =  new MyPromise((resolve, reject)=>{
//     setTimeout(()=> {
//    resolve("chain promise!!");
//    //reject("reject")
//     },0)
//  });
 
//  promise.then((val)=> {
//      console.log("T1", val);
//      return "via T1"+ val;
//  }).then((val2) => {
//     console.log("T2", val2)
//     return val2;
//  }).catch((error) =>{
//     console.log("via direct",error)
//  }).finally(()=>{
//     console.log("final finally")
//  });
// }