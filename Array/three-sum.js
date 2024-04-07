// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

 

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

function threeSum(nums, target) {
    if(nums.length === 0 || nums.length < 3 ) return [];
    let sorted = nums.sort((a,b) => a - b);
    
    let hasMap = [];
    let foundElements = [];
     for (let index = 0 ; index < sorted.length-2; index++) {
        const fixedNum = sorted[index];
         let first = index+1, end = sorted.length-1;
         while (first < end) {
             var sum = fixedNum + sorted[first]+sorted[end];
             if(sum < target) {
                 first ++;
             } else if(sum > target) {
                 end --;
             } else {
                foundElements = [fixedNum, sorted[first],sorted[end]];
                hasMap.push(foundElements);
                first++;
                 end --;
             }
         }
    }
     return [...new Set(hasMap.map(pair => JSON.stringify(pair)))].map(pair => JSON.parse(pair)); // remove duplicates frm 2 D array
 }
 console.log(threeSum([-1,0,1,2,-1,-4], 0));