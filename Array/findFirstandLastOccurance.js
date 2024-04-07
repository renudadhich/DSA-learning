/**
 * given an sorted array find the indecies of first and last occurance of the repeated target element
 * nums: [1,2,3,3,3,4,5,6,7], target : 3
 * output: [2, 4]
 * @param {*} nums 
 * @param {*} target 
 * @returns 
 */


const findFirstOccurance = (nums, target) => {
    let  low =0, high = nums.length-1;
    while (low <= high) {
     let mid  = low + Math.floor((high- low)/2); 
    if(nums[mid] === target && (mid === 0 || nums[mid-1] < target)) {
     return mid;
    } else if(target > nums[mid]) {
          low = mid+1;
    } else {
         high =  mid-1;
    }
 }
 return -1;
 }
 
 const findLastOccurance = (nums, target) => {
     let  low =0, high = nums.length-1;
     while (low <= high) {
      let mid  = low + Math.floor((high- low)/2); 
     if(nums[mid] === target && (mid === nums.length-1 || nums[mid+1] > target)) {
      return mid;
     } else if(target < nums[mid]) {
           high = mid-1;
     } else {
          low =  mid+1;
     }
  }
  return -1;
 }
 
 const findFirstAndLastOccurance = (nums, target) => {
  const first = findFirstOccurance(nums, target);
  const last = findLastOccurance(nums, target);
  return [first, last];
 
 }
 const input = [1,2,3,3,3,4,5,6,7];
 
 console.log("result", findFirstAndLastOccurance(input, 3))