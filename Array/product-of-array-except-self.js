/**
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
  You must write an algorithm that runs in O(n) time and without using the division operation.
 * input = [2,1,3,4]
 * output = [12,24,8,6]
 * 
 * explanation : each element in the output array should contain multiplication of other elements except self
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function(nums) {
    let answer =[], leftNum =[],rightNum = [];
    leftNum[0] = 1;
     for(var i = 1; i < nums.length; i++) {
         leftNum[i] = leftNum[i-1]*nums[i-1];
     }
   
    rightNum[nums.length-1] = 1;
    for(var j =nums.length-2; j > -1; j--) {
        rightNum[j] = rightNum[j+1]*nums[j+1];
    }
    
    
   for(var index = 0; index< nums.length; index++) {
      answer.push(leftNum[index]*rightNum[index]) 
   }
    return answer;
};

console.log(productExceptSelf([[-1,1,0,-3,3]]));
console.log(productExceptSelf([2,1,3,4]));