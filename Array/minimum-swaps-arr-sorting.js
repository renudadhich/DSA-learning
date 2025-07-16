/**You are given an unordered array consisting of consecutive integers  [1, 2, 3, ..., n] 
 * without any duplicates. You are allowed to swap any two elements. 
 * You need to find the minimum number of swaps required to sort the array in ascending order.
For example, given the array 
 * arr = [4,3,2,1]
  output - 3  
  explaination -> check whether arr[index] is equal to index+1 ..if yes ..move to next item
   else ==> check till index+1 == arr[index] => index++;
    first swap index 0 element 4 with it's correct position 3  => 1,3,2,4
    now check for index 1 and swap 3 with index[2] that is 2 => 1,2,3,4
    hence array is sorted :)
*/

const minimumSwaps = (unSortedArr) => {
  let visited = {},
    element,
    swapSum = 0,
    temp;
  for (let index = 0; index < unSortedArr.length; index++) {
    if (!visited[index]) {
      visited[index] = true;
      if (index + 1 !== unSortedArr[index]) {
        element = index;
        while (unSortedArr[element] != index + 1) {
          element++;
        }
        temp = unSortedArr[element];
        unSortedArr[element] = unSortedArr[index];
        unSortedArr[index] = temp;
        swapSum++;
      }
    }
  }
  return swapSum;
};
const swap = (arr, index, target) => {
  let temp = arr[index];
  arr[index] = arr[target];
  arr[target] = temp;
};
function minimumSwaps2(arr) {
  let swapCount = 0;
  for (let i = 0; i < arr.length; i++) {
    while (arr[i] !== i + 1) {
      swap(arr, arr[i] - 1, i);
      swapCount++;
    }
  }
  console.log("Sorted Array", arr.toString());
  return swapCount;
}
const inputArr = [6, 3, 8, 10, 7, 4, 5, 2, 1, 9];
//console.log('minimum swaps', minimumSwaps(inputArr));
console.log('minimum swaps', minimumSwaps2(inputArr));
// console.log('minimum swaps', minimumSwaps([1, 4, 2, 3]));
