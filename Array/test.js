// Array.prototype.customFilter = {name:'ankir',value:2};
// if (!(Array.prototype.customFilter && typeof Array.prototype.customFilter === 'function')) {
//   Array.prototype.customFilter = function(callback) {
//     if (!(typeof callback === 'function' || typeof callback === 'Function')) {
//       console.log('please provide a valid method as callback');
//     }
//     let currentArr = this,
//       len = this.length,
//       index = 0,
//       res = [],
//       currentValue;
//       while (index < len) {
//       currentValue = currentArr[index];
//         if (callback(currentValue, index, currentArr)) {
//           res.push(currentValue);
//         }
//       index++;
//     }
//   return res;
//   };
// }
// var arr = [1,2,3,4,5];
// console.log(arr.customFilter((item)=>item%2===0));

// Array.prototype.customFlat = function() {
//   let currentArr = this;
// return currentArr.reduce((acc, currentValue) => {
//     if (Array.isArray(currentValue)) {
//       return acc.concat(currentValue.customFlat());
//     }
//     return acc.concat(currentValue);
//   }, []);
// };
// var flattenArr = [1, 2, [3, 4, [5, 6, [7, 8]]]];
// console.log(flattenArr.customFlat());
// Array.prototype.customReduce = function(callback, intialValue) {
//   if (!(Array.prototype.customReduce && typeof Array.prototype.customReduce === 'function')) {
//     console.log('please provide valid callback');
//   }
//   let currentArr = this,
//     accumulator,
//     index = 0;
//     if(!currentArr.length && !intialValue) {
//      console.log('custom reduce method can not be called with empty array')
//      return null;
//     }
//   if (intialValue) {
//     accumulator = intialValue;
//  } else {
//     accumulator = currentArr[index];
//     index++;
//    }
//   for (let cuurentIndex = index; cuurentIndex < currentArr.length; cuurentIndex++) {
//     accumulator = callback(accumulator, currentArr[cuurentIndex], cuurentIndex, currentArr);
//   }
//   return accumulator;
// };
// var reduceArr = [1,2,3];
// console.log(reduceArr.customReduce((acc, currentValue) => acc.concat(currentValue),[4]));
// const swapNumbers = (arr,first, second) => {
//   let temp;
//   temp = arr[first];
//   arr[first] = arr[second];
//   arr[second] = temp;
// };
// const binaryArr = [1, 0, 1, 0, 0, 0, 1, 1,0,0,0];

// function sortBinaryArray(unsortedArr) {
//   let j = unsortedArr.length - 1,
//     i = 0;
//   while (i < j) {
//     if (unsortedArr[i] === 0) i++;
//     else {
//       swapNumbers(unsortedArr,i, j);
//       j--;
//     }
//   }
//   return unsortedArr;
// }
// console.log(sortBinaryArray(binaryArr));
// var str1 = '(a+b)' ;// valid
// var str2 = '{a(+b})'; // invalid
// var str3 = '(a{+b)})'; // invalid
// const checkBrackets = (inputStr) => {
//     let closingBrackets = [')','}',']'];
//     let openArray = [];
//     let brackets = {'{':'}','(':')','[':']'};
//    for(let i=0;i<inputStr.length;i++) {
//        let value = inputStr[i];
//        if(brackets[value]) {
//          openArray.push(value);
//        } else if(closingBrackets.includes(value)) {
//          let lastElement = openArray.pop();
//         if(brackets[lastElement] !== value) {
//             return 'InValid string'
//         }
//       }
//    }
//    return 'valid string'
// }
// console.log(checkBrackets(str2));
