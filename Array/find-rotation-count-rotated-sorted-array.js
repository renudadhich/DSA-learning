/**Consider an array of distinct numbers sorted in increasing order. 
 * The array has been rotated (clockwise) k number of times. Given such an array, 
 * find the value of k.
 *  need to count rotation count of the sorted and rotated array
 * example  : Input : [3,4,5,1,2]
 * output : 3
 * Input : arr[] = {15, 18, 2, 3, 6, 12}
  Output: 2
  so basically rotation count is nothing but index of minimum element that is 2 in the above example
 * Algo :
    first we will find pivot point same as we find in the (search-in-left-rotated-array) algo
    and next to pivot point in the array is minimum element of the array ,so we get the minimum element index.
 */
const findMinimumIndex = (inputArr, low, high) => {
  if (low > high) return -1;
  if (low === high) return low;
  const mid = Math.ceil((low + high) / 2);
  if (high > mid && inputArr[mid] > inputArr[mid + 1]) return mid + 1;
  if (low < mid && inputArr[mid - 1] > inputArr[mid]) return mid;
  if (inputArr[low] >= inputArr[mid]) return findMinimumIndex(inputArr, low, mid - 1);
  return findMinimumIndex(inputArr, mid + 1, high);
};
const countRotationInSortedPivotedArr = (inputArr) => {
  const low = 0;
  const high = inputArr.length - 1;
  return findMinimumIndex(inputArr, low, high);
};

const arr = [2,3, 4, 5, 1];
console.log('rotation count ==> ', countRotationInSortedPivotedArr(arr));
console.log("rotation count is =>",countRotationInSortedPivotedArr([15, 18, 2, 3, 6, 12]));

/**
 * if we have to find minimum element in the pivoted and sorted array ,
 * we can use this same method and we can return element at that index.
 * 
 */
const findMinimumInPivotedSortedArray = (inputArr) => {
    const low = 0;
    const high = inputArr.length - 1;
    return inputArr[findMinimumIndex(inputArr, low, high)];
}
console.log(" minimum element in the array =>",findMinimumInPivotedSortedArray(arr));