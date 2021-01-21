/**
 * Write a function the accepts two parameters an array of positive integers and a interger.
 * we need to find the min length of contigous subarray of which sum is equal to or greater than the intger 
 * passed to it.
 * if there is no one return 0 instead.
 * examples :
 * minSubArrayLen([2,3,1,2,4,3],7) ==> [4,3] => output is 2
 * minSubArrayLen([2,1,6,5,4],9) => [5,4] => output is 2
 * minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19],52) => 62
 * minSubArrayLen([1,4,16,22,5,7,8,9,10],39) ==>3
 * minSubArrayLen([1,4,16,22,5,7,8,9,10],55) ==>5
 * minSubArrayLen([1,4,16,22,5,7,8,9,10],95) ==>0
 */

 const minSubArrayLen = (arr,num)=>{
   let subArrLength=0,minLength=arr.length,subArr=[];

   for(let i=0;i<arr.length;i++) {
     let sum = arr[i]+arr[i+1];
     if(sum>=num) {
    subArrLength = subArr.length;
    minLength = Math.min(minLength,subArrLength);
        }
   }

   return minLength;
 }