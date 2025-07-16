/**
 * Write a function the accepts two parameters an array of positive integers and a interger.
 * we need to find the min length of contigous subarray of which sum is equal to or greater than the intger
 * passed to it.
 * if there is no one return 0 instead.
 * examples :
 * minSubArrayLen([2,3,1,2,4,3],7) ==> [4,3] => output is 2
 * minSubArrayLen([2,1,6,5,4],9) => [5,4] => output is 2
 * minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19],52) => [62] =>1
 * minSubArrayLen([1,4,16,22,5,7,8,9,10],39) ==>4 => [5,7,8,9,10]
 * minSubArrayLen([1,4,16,22,5,7,8,9,10],55) ==>5
 * minSubArrayLen([1,4,16,22,5,7,8,9,10],95) ==>0
 */

/**
 * This solution is with O(n2) complexity
 * @param { } arr
 * @param {*} num
 */
const minSubArrayLen = (arr, num) => {
  let subArrLength = 1,
    minLength = Infinity;
  for (let i = 0; i < arr.length; i++) {
    let tempsum = arr[i];
    subArrLength = 1;
    if (arr[i] >= num) return subArrLength;
    let j = i + 1;
    while (j < arr.length) {
      tempsum += arr[j];
      subArrLength++;
      if (tempsum >= num) {
        break;
      }
      j++;
    }
    if (tempsum >= num) {
      if (subArrLength < minLength) minLength = subArrLength;
    }
  }

  return minLength !== Infinity ? minLength : 0;
};

// console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // [4,3]=>2
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); //0
// console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // => [5,4] => output is 2
// console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // => [62] =>1
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // ==>3
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // ==>5

/**
 * This is optimal solution
 * O(n) complexity
 */
const optimalMinSubArrayLen = (arr, num) => {
  let total = 0,
    start = 0,
    end = 0,
    minLength = Infinity;
  while (start < arr.length) {
    //if the current window does not add up to the current window,then move window to the right side,
    if (total < num && end < arr.length) {
      total += arr[end];
      end++;
    }
    //if current window add up to the given number,
    // then we can shrink the window
    else if (total >= num) {
      minLength = Math.min(minLength, end - start);
      total -= arr[start];
      start++;
    }
    //
    else {
      break;
    }
  }
  return minLength !== Infinity ? minLength : 0;
};

 console.log(optimalMinSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // [4,3]=>2
// console.log(optimalMinSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); //0
// console.log(optimalMinSubArrayLen([2, 1, 6, 5, 4], 9)); // => [5,4] => output is 2
// console.log(optimalMinSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // => [62] =>1
 console.log(optimalMinSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // ==>3
//console.log(optimalMinSubArrayLen([10, 9, 8, 7, 7, 6, 5, 2], 20)); // ==>5

//another solution

const findSubArray = (inputArr, target) => {
  let sum = 0, start = 0, end = 0, output = [], minLength = Infinity;
  while (end < inputArr.length) {
    sum = sum + inputArr[end];
     end++;
    while (sum >= target) {
      if(sum === target) {
      let temp =[]
      for(let i = start; i < end; i++) {
        temp.push(inputArr[i])
      }
       output.push(temp);  // to check total subarrays exist
       minLength = Math.min(minLength, end - start);
    }
     
      sum = sum - inputArr[start];
      start++;
      
    }  

   }
   console.log("output", output);
  return minLength;
};

findSubArray([2,3,1,2,4,3],7) // => 2
