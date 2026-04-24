Array.prototype.customFilter = {name:'ankir',value:2};
if (!(Array.prototype.customFilter && typeof Array.prototype.customFilter === 'function')) {
  Array.prototype.customFilter = function(callback) {
    if (!(typeof callback === 'function' || typeof callback === 'Function')) {
      console.log('please provide a valid method as callback');
    }
    let currentArr = this,
      len = this.length,
      index = 0,
      res = [],
      currentValue;
      while (index < len) {
      currentValue = currentArr[index];
        if (callback(currentValue, index, currentArr)) {
          res.push(currentValue);
        }
      index++;
    }
  return res;
  };
}
// var arr = [1,2,3,4,5];
// console.log(arr.customFilter((item)=>item%2===0));

Array.prototype.customFlat = function() {
  let currentArr = this;
return currentArr.reduce((acc, currentValue) => {
    if (Array.isArray(currentValue)) {
      return acc.concat(currentValue.customFlat());
    }
    return acc.concat(currentValue);
  }, []);
};
var flattenArr = [1, 2, [3, 4, [5, 6, [7, 8]]]];
console.log(flattenArr.customFlat());

Array.prototype.customReduce = function(callback, intialValue) {
  if (!(Array.prototype.customReduce && typeof Array.prototype.customReduce === 'function')) {
    console.log('please provide valid callback');
  }
  let currentArr = this,
    accumulator,
    index = 0;
    if(!currentArr.length && !intialValue) {
     console.log('custom reduce method can not be called with empty array')
     return null;
    }
  if (intialValue) {
    accumulator = intialValue;
 } else {
    accumulator = currentArr[index];
    index++;
   }
  for (let cuurentIndex = index; cuurentIndex < currentArr.length; cuurentIndex++) {
    accumulator = callback(accumulator, currentArr[cuurentIndex], cuurentIndex, currentArr);
  }
  return accumulator;
};
var reduceArr = [1,2,3];
console.log(reduceArr.customReduce((acc, currentValue) => acc.concat(currentValue),[4]));


Array.prototype.customEvery = function (callback) {
  for(index =0; index< this.length; index++) {
       if(!callback(this[index])) {
           return false;
       }
      
  }
   return true;
   
}
  console.log([1,2,3].customEvery((item) => item > 1));

Array.prototype.customSome = function (callback) {
  for(index =0; index< this.length; index++) {
       if(callback(this[index])) {
           return true;
       }
      
  }
   return false;
   
}
console.log([1,2,3].customSome((item) => item > 1));
