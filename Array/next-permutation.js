// A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

// For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
// The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

// For example, the next permutation of arr = [1,2,3] is [1,3,2].
// Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
// While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
// Given an array of integers nums, find the next permutation of nums.

// The replacement must be in place and use only constant extra memory.

 
// solution explanation : https://duncan-mcardle.medium.com/leetcode-problem-31-next-permutation-javascript-cc719cbc6737
//   1. find the peak(largest)or leftSwap from right to left in the Array.
//   2. find the next largest number again from right to left in the Array.
//   3. swap these two numbers and sort the numbers in ascending order from leftSwap to end of the Array.
//   4.if no leftSwap foud then return ascending sorted Array.

// Example 1:

// Input: nums = [1,2,3]
// Output: [1,3,2]
// Example 2:

// Input: nums = [3,2,1]
// Output: [1,2,3]
// Example 3:

// Input: nums = [1,1,5]
// Output: [1,5,1]

const swap = (numbers, i, j) => {
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
}
const reverse = (arr, start, end) => {
    while(start < end) {
        swap(arr, start, end);
        start ++;
        end --;
    }
}

const findNextPermutation = (numbers) => {
    let leftSwap =0;
      for(let i = numbers.length-2; i >= 0; i--) {  // first lowest form right to left
       // console.log("numbers[i] < numbers[i+1]", numbers[i] , numbers[i+1])  
        if(numbers[i] < numbers[i+1]) {
            leftSwap = i;
            break;
          }
        }
        for(let j = numbers.length-1; j > leftSwap; j--) {   // find next largest from leftSwap
            if(numbers[j] > numbers[leftSwap]) {
                    // [numbers[j], numbers[leftSwap]] = [numbers[leftSwap], numbers[j]];
                
                 swap(numbers, j, leftSwap);
                  reverse(numbers, leftSwap+1, numbers.length-1);
                 
                break; 
                }
                
   
        }
        if(!leftSwap)  reverse(numbers, 0, numbers.length-1);
        return numbers;
};

 console.log(findNextPermutation([7, 2, 3, 1, 5, 4, 3, 2, 0])); // [7, 2, 3, 2, 0, 1, 3, 4, 5]
// console.log(findNextPermutation([3,2,1]));   // 1,2,3


