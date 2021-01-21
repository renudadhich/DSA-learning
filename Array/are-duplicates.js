/**
 * write a function that will return whether duplicates are available or not in the arguments
 *  it accepts any number of arguments .. and return true/false
 * 
 * exp: areDuplicates(1,2,3) /// false
 *  areDuplicates(1,2,3,2)  // true
 */

 /**
  * simplest solution is using Set
  */
 function areDuplicatesWithSet (...args) {
  return new Set(args).size !== args.length
 }
console.log(areDuplicatesWithSet(1,2,3));
 /**
  * using frequency counter pattern
  */
 const areDuplicatesWithfreqCount = (...args) =>{
    let frequencyCounter ={};
    for(let char of args){
      if(!frequencyCounter[char]) {
       frequencyCounter[char] =1;
       } else {
            return true;
      }
   
   }
   return false;
 }
 console.log(areDuplicatesWithfreqCount(1,2,3));
 /**
  * 
  * @param  {...any} args using multiple pointers pattern
  */
 const areDuplicatesWithMulPointer = (...args)=>{
     // Two pointers
        args.sort((a,b) => a > b);
        let start = 0;
        let next = 1;
        while(next < args.length){
          if(args[start] === args[next]){
              return true
          }
          start++
          next++
        }
        return false
      
 }
 console.log(areDuplicatesWithMulPointer(1,2,3));