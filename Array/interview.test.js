

var str = "AZAAD"

function  getAscii (inputStr) {
    var output = 0, asciiValue, index = 0;
 for(var index = 0; index < inputStr.length; index++) {
     asciiValue =  inputStr[index].charCodeAt();
     console.log("typ", typeof asciiValue )
     output = output + asciiValue;
     if(output === 65) {
        index = 0;
     } else if (output > 65) {
          
     }
 }
 return index;

}

// console.log(getAscii("AA"));

var num = [1,2,3,4,5,6,7,7,7,8,9,10];

function countFrq (nums) {
    let prev= null, index = 0, last = 0, firstIndex = -1;
    while(index < nums.length) {
      if(prev === nums[index]) {
        if(firstIndex === -1) {
            firstIndex =  index-1;
        }
         last = index;
       } 
       prev = nums[index];
  
       index ++;
    }
    return [firstIndex, last]
} 

//console.log("counts",countFrq(num));


// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 0);
// Promise.resolve(3).then((res) => {
//   console.log(res);
//   setTimeout(() => {
//     console.log(7);
//   }, 100);
//   setTimeout(() => {
//     console.log(8);
//   }, 0);
// });
// setTimeout(() => {
//   console.log(4);
// }, 100);
// setTimeout(() => {
//   console.log(9);
// }, 0);
// setTimeout(() => {
//   console.log(5);
// }, -100);
// console.log(6);



const binarySearch = (nums, low, high,target) => {
    let mid = low+ Math.floor(high-low)/2;
    if(nums[mid] === target || nums[mid-1] === target || nums[mid+1] === target) {
        return mid;
    } else if ( target < nums[low]) {
       return binarySearch(nums, low, mid-1, target);
    } else {
        return binarySearch(nums, mid+1, high, target);
    }
}
const findFirstOccurance = (nums, target) => {
   let  low =0, high = nums.length-1;
   while (low <= high) {
    let mid  = low + Math.floor((high- low)/2); 
    console.log("mid in first", mid);
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
     console.log("mid in lasts" ,mid);
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

// console.log(findFirstAndLastOccurance(input, 3))

const minSubArray = (nums, target) => {
    let minLength = Infinity, end=0, start=0, sum =0;
    while(start < nums.length) {
      if(sum < target && end < nums.length) {
         sum += nums[end];
         end++;
     } else if(sum >= target) {
        minLength = Math.min(minLength, end-start);
        sum = sum- nums[start];
           start++;
      } 
      else { 
        break;
      }
   
    }
    return minLength != Infinity ? minLength : 0;
}

// console.log(minSubArray([2, 3, 1, 2, 4, 3], 7))   

const twoSum = (nums, target) => {
    let first = 0, end= nums.length-1, sum =0;
    while(first < end) {
     sum = nums[first] + nums[end];
     if(sum < target) {
        first++;
     } else if(sum > target) {
        end--;
     } else {
        return [first, sum]
     }
    }

}

//  console.log(twoSum([2,7,11,15], 9))   

const maxSubArray = (nums, maxArrLength) => {
    let total =0, maximum =0;
    for(var index =0 ; index < maxArrLength; index++) {
       total += nums[index];
    }
    maximum = total;
    for(var j = maxArrLength; j < nums.length; j++) {
      total = total - nums[j - maxArrLength] + nums[j];
      maximum = Math.max(maximum, total);
      console.log("maximum", maximum);
    }
    return maximum;
}
console.log(maxSubArray([2, 3, 1, 2, 4, 3], 3))  