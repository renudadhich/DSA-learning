// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
/**
 * Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

Example 2:
Input: height = [4,2,0,3,2,5]
Output: 9

 * 
 */
const rainWaterTrapping = (nums) => {
    let left_Array = [], right_Array = [], output = 0;
    left_Array[0] = nums[0];
    let leftmax = nums[0];
    for(let i = 1; i < nums.length; i++) {
        if(leftmax < nums[i]) {
            leftmax = nums[i];
        }
       left_Array.push(leftmax);
    }

    right_Array[nums.length-1] = nums[nums.length-1];
    let rightmax = nums[nums.length-1];
    for(let j = nums.length-2; j>= 0; j--) {
        if(rightmax < nums[j]) {
            rightmax = nums[j];
        }
        right_Array[j] = rightmax;
    }
    for(let index = 0; index< nums.length; index++) {
        output += Math.min(left_Array[index], right_Array[index]) - nums[index];
    }
    return output;
    
}

// console.log(rainWaterTrapping([0,1,0,2,1,0,1,3,2,1,2,1]));
console.log(rainWaterTrapping([3,1,2,4,0,1,3,2]));