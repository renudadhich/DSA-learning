//max subArray

// efficient solution explaination : we need to find  array continous window with n size whose sum is maximum
// [1,2,5,2,8,1,5], n=4

const maxSubArray = (inputArr, arrSize) => {
   let sum =0, maxSum =0, elements =[];

   for(let i=0; i < arrSize; i++){
      sum += inputArr[i];
   } 
     maxSum = sum;
   for(let j = arrSize; j<inputArr.length; j++) {
      sum = sum - inputArr[j- arrSize] + inputArr[j];  // 0, 
      if(sum > maxSum) {
         maxSum = sum;
         elements = [j-arrSize+1, j];
      }
   }
   console.log("elements", elements);
   return maxSum
}

//console.log(maxSubArray([1,2,5,2,8,1,5], 3))

// min subarray 
// * we need to find the min length of contigous subarray of which sum is equal to or greater than the intger
// * passed to it.
// minSubArrayLen([2,3,1,2,4,3],7) ==> [4,3] => output is 2


const minSubArrayLen = (inputArr, expectedSum) => {
   let minLength = Infinity;
   let start = 0, end = 0, sum =0;
   while(start < inputArr.length) {
     if(sum < expectedSum && end < inputArr.length) {
      sum += inputArr[end];
      end++;
     } else if(sum >= expectedSum) {
            start++;
          minLength = Math.min(minLength, end-start);
          sum = sum - inputArr[start];
          
          
     }
     else  {
     break;
     }
     console.log("sum", sum, start , end, inputArr[start], inputArr[end]);
     
   }
  return minLength === Infinity ? 0 : minLength;
}

//console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));




const movezero = (nums) => {
   let end = 1, start =0;
 while(end < nums.length) {
   if(nums[end] >= nums[end+1]) {
      [nums[end], nums[end+1]] = [nums[end+1], nums[end]];
      start++;
   } else {
  
  end++;
   }
  }
  return nums;
}
console.log(movezero([0,1,0,2,0,1,1,1]));


const findLongestSubstring1 = (Str) => {
   let charSet = new Set(), left =0

  for(let i = 0; i < Str.length; i++) {
     
         while(charSet.has(Str[i])) {
            charSet.delete(Str[left]);
            left++;
         }
      
      charSet.add(Str[i]);

  }
  return charSet;
}

console.log(findLongestSubstring1('this is awesom e'));

