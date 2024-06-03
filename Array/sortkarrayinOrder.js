/**
 * Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

 Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]
 */

/** counting approach */
const sortColors = nums => { // complexity O(n)
    // count of 0s, 1s and 2s
    let count = [0, 0, 0];

    // count the occurrence of each number
    for(let num of nums) count[num]++;
    let index = 0;
    for(let i = 0; i < count.length; i++) {
        while(count[i] > 0) {
            nums[index] = i;
            count[i]--;
            index++;
        }
    }
    return nums;
}
// console.log(sortColors([2,0,2,1,1,0]));

/** optmised approach  */

const swap = (arr, a, b) => [arr[a], arr[b]] = [arr[b], arr[a]];

const sort012Array = (colors) => {
    let low = 0 , high = colors.length-1, mid =0;
  
    while(mid <= high) {
     if(colors[mid] === 0) {
         swap(colors, low, mid);
         mid++;
         low++;
     } else if(colors[mid] === 2) {
         swap(colors, mid, high);
         high--;
     } else {
         mid++;
     }
    }
   return colors;
 }

 console.log(sortOrderArray([2,0,2,1,1,0]));

/** sort n number of array  */
const sortKNumberArray = (colors, count) => {
   let low = 0 , high = colors.length-1, mid =0, min=0, max= count;
 while(min <= max) {
   while(mid <= high) {
    if(colors[mid] === min) {
        swap(colors, low, mid);
        mid++;
        low++;
    } else if(colors[mid] === max) {
        swap(colors, mid, high);
        high--;
    } else {
        mid++;
    }
   }
   mid = low;
   min++;
   max--;
    }
   return colors;
}
console.log(sortKOrderArray([2,0,2,1,1,0,3,4], 4));
console.log(sortKOrderArray([1,2,0,1,2,0,4,3], 4));