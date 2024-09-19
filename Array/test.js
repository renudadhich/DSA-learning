//move zeros to end in O(n)
const input = [1,0,1,1,1,0,0,1,1,1]

const swap = (arr, i, j) => {
   [arr[i], arr[j]] = [arr[j], arr[i]];
}
const moveZerosEnd = (input) => {
    let i = 0, j = input.length-1;
    while(i < j) {
     if(input[i] === 0) {
        swap(input, i, j);
        j--;
     } 
     i++;
    } 
    return input; 
}

// console.log(moveZerosEnd(input));
const sortBinaryArray = (input) => {
  let i = 0, j = input.length-1;
  while(i < j) {
   if(input[i] === 1) {
      swap(input, i, j);
      j--;
   } 
   i++;
  } 
  return input;  
}
// console.log(sortBinaryArray([1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0]));

const twoSum = (array, target) => {   // O(logn)
   let start = 0, end = array.length-1, sum = 0;

   while(start < end) {
      sum = array[start] + array[end];

      if(sum === target) {
        return [start, end];
      }  
      if(sum > target) {
         end--;
      } else {
         start++;
      }
   }
};

//console.log(twoSum([2,7,11, 15], 9));

const threeSum = (array, target) => {
   if(array?.length < 3) return [];
   const sorted = array.sort((a,b) => a-b);
   let fixed, start, end, sum = 0;
   for(let index = 0; index < sorted.length; index++) {
     fixed = sorted[index];
     start = index+1;
     end = sorted.length-1;
     while(start < end) {
      sum = fixed + sorted[start] + sorted[end];

      if(sum === target) {
         console.log("elements", fixed, sorted[start], sorted[end]);
         return [fixed, sorted[start], sorted[end]];
      }  
      if(sum > target) {
         end--;
      } else {
         start++;
      }
   }
   }
}
//console.log(threeSum([-1,0,1,2,-1,-4], 0));


const minSubArray = (nums, target) => {
let start = 0, end = 0, minLength = Infinity, total =0;
while(start < nums.length) {
  if(total < target && end < nums.length) {
   total += nums[end];
   end++;
} else if(total >= target) {
   console.log(start, end);
   minLength = Math.min(minLength, end-start);
   total = total - nums[start];
   start++;
}  else {
   break;
}
}
return minLength === Infinity ? 0 : minLength ;
}

console.log(minSubArray([2, 3, 1, 2, 4, 3], 7));


const removeduplicates = (nums) => {
   let start =0, end =1; 
   while(end < nums.length) {
     if(nums[start] !== nums[end]) {
      start++;
      nums[start] = nums[end];
        
     }
     end++;
   }
   console.log("nums", nums, start);
}
console.log(removeduplicates([1, 2, 3, 3, 4, 4, 4, 4, 4, 7, 12, 13]));
