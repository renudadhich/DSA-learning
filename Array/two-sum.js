// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

const withSortingFindtwoSum = (nums, target) => {   // time complexity O(logn)
     nums.sort((a,b) => a-b);
     let start = 0, end = nums.length-1, total =0;
    while (start < end) {
        total = nums[start] + nums[end];
       if(total > target) {
         end --;
       } else if(total < target) {
        start ++;
       } else if (target === total){
          return [start, end];
       }
    }
}


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {   // optimal with hasmap complexity time and space =  O(n)
    let hashMap = new Map();
    for(let index = 0; index < nums.length; index++) {
        const diff = target - nums[index];
        if(hashMap.has(diff)) {
           return [hashMap.get(diff), index]
        }
       hashMap.set(nums[index], index)
    }
};

console.log(withSortingFindtwoSum([3,2,4], 6));
//console.log(twoSum([2,7,11,15], 9))