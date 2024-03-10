// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 // Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
    let insertPosition = 0;
   
    for(var index=0; index < nums.length; index++) {
        if(nums[index] !== 0 ) {
            nums[insertPosition] = nums[index];
            insertPosition++;
        } 
        
    }
    while(insertPosition< nums.length) {
        nums[insertPosition] = 0;
        insertPosition++;
    }
    return nums;
};
console.log(moveZeroes([0,1,0,3,12]));