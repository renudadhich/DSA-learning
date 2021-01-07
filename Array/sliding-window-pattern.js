/**
 * write a function called maxSubArraySum which accepts an array of intergers and a number called n.
 * this function should calculate maximum sum of n consecutive elements in the array.
 * exp : maxSubArraySum([1,2,5,2,8,1,5],2) // 10
 * exp : maxSubArraySum([1,2,5,2,8,1,5],4) // 17
 * exp: maxSubArraySum([4,2,1,6],1) // 6
 * exp :maxSubArraySum([4,2,1,6,2],4) // 13
 * exp: maxSubArraySum([],4) // null
 * 
 */

/**
 * this is normal solution with O(n2) complexity
 * first iterate over each element in the array and inside it .. check each number summing up till n numbers
 * return max sum;
 * @param {given array} inputArr 
 * @param {given input} n 
 */
 const maxSubArraySum = (inputArr,n)=>{
     if(inputArr.length<n) return null;
   let maxsum =0;
   for(let i =0;i< inputArr.length-n+1;i++) {
       let sum =0;
       for(let j=i;j<n+i;j++) {
        sum += inputArr[j];
       }
       if(sum>maxsum) {
           maxsum =sum;
       }
   }
   return maxsum;
 }
 console.log(maxSubArraySum([1,2,5,2,8,1,5],2)); //10
 console.log(maxSubArraySum([1,2,5,2,8,1,5],4)) // 17
 console.log( maxSubArraySum([4,2,1,6],1)) // 6
 console.log(maxSubArraySum([4,2,1,6,2],4)) // 13
 console.log( maxSubArraySum([],4)) // null
/**
 * optimal solution in O(n) complexity with silding window pattern
 * we will be shifting array window to get maz sum within one loop that is O(n)
 * @param {} inputArr 
 * @param {*} n 
 */
 const optimalMaxSubArraySum = (inputArr,n)=>{
    if(inputArr.length<n) return null;
    let maxsum =0, sum =0;
    for(let i =0;i<n;i++) {
        maxsum += inputArr[i];
    }
    for(let j=n;j<inputArr.length;j++) {
        sum =  maxsum-inputArr[j-n]+inputArr[j];
        if(sum>maxsum) {
            maxsum =sum;
        }
       }
      
    return maxsum;
  }
  console.log(optimalMaxSubArraySum([1,2,5,2,8,1,5],2)); //10
  console.log(optimalMaxSubArraySum([1,2,5,2,8,1,5],4)) // 17
  console.log( optimalMaxSubArraySum([4,2,1,6],1)) // 6
  console.log(optimalMaxSubArraySum([4,2,1,6,2],4)) // 13
  console.log( optimalMaxSubArraySum([],4)) // null