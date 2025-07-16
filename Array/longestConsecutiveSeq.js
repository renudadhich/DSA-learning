// 128. Longest Consecutive Sequence

// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

 

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9
 

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109


const longestSequence = (nums) => {
    if (nums.length === 0) return 0;
    if(nums.length === 1) return 1;
    nums.sort((a,b) => a-b);
    console.log("nums", nums);
    let count = 0, longestSequence = 0;
    for(let index =0; index < nums.length; index++) {
        let diff = nums[index+1] - nums[index];
       if(diff === 1 ) {
        count++;
       } else {
        longestSequence = Math.max(count+1, longestSequence);
      }
    }
    return longestSequence;
}

console.log(longestSequence([100,4,200,1,3,2]))