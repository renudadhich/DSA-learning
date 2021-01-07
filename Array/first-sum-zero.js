/**
 * get first number pair from the array whose sum is zero
 * use two pointers to solve in O(n) time
 * exp: [-4,-3,-2,-1,0,1,2,5]  // [-2,2]
 * if there are no values whose sum is zero then return null or undefined
 * exp: []  // undefined
 * exp: [-4,-3,-2,1,0,5] // undefined
 */

/**
 * this is normal solution with O(n2) complexity
 * this is checking each element with the other element in the array
 * and cheking sum it is equal to zeop or not
 * and returning value 
 */

const firstZeroSum = (inputArr) => {
  if (inputArr.length === 0) return undefined;
  for (let i=0;i<inputArr.length;i++) {
      for(let j=i+1;j<inputArr.length;j++) {
        let sum = inputArr[i]+inputArr[j];
        if(sum===0) {
            return [inputArr[i],inputArr[j]];
        }
      }   
  }
  return undefined;
};
console.log(firstZeroSum([-4,-3,-2,-1,0,1,2,5]));
console.log(firstZeroSum([]));
console.log(firstZeroSum([-4,-3,-2,1,0,5]));

/**
 * this is optimal solution to solve it in O(n) complexity
 * using multiple pointer we can reduce internal for loop and hence time complexity is reduced
 * @param {*} inputArr 
 */
const optimalFirstZeroSum =(inputArr)=>{
      let left = 0,right = inputArr.length-1;
      if(inputArr.length===0) return undefined;

      while(left<right) {
          let sum = inputArr[left] +inputArr[right];
          if(sum===0){
              return [ inputArr[left],inputArr[right]];
          } else if(sum>0) {
              right--;
          } else{
              left++;
          }
      }
      return undefined;
}
console.log(optimalFirstZeroSum([-4,-3,-2,-1,0,1,2,5]));
console.log(optimalFirstZeroSum([]));
console.log(optimalFirstZeroSum([-4,-3,-2,1,0,5]));