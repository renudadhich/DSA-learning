/**
 * Write a function to count unique values in the array . this array contains duplicate values
 *  including negative numbers also but sorted values
 * this solution won't work for unsorted values
 * exp: input [1,1,1,1,1,1,2]; output : 2
 * exp: input [1,2,3,3,4,4,4,4,4,7,12,13] , output :6
 * exp: input [] // 0
 * exp: input [-2,-1,0,0,1,2] // 5
 */

const countUniqueValuesInSortedArray = (inputArr) => {
  let prev,
    counter = 0;
  for (let item of inputArr) {
    if (prev !== item) {
      counter++;
    }
    prev = item;
  }
  return counter;
};
console.log(countUniqueValuesInSortedArray([1, 2, 3, 3, 4, 4, 4, 4, 4, 7, 12, 13]));

/** using two pointers we don't need to use extra variables */
const countUniqueValuesWithoutExtraVar = (inputArr) => {
  let i = 0,
    j = 1;
  if (inputArr.length > 0) {
    while (j < inputArr.length) {
      if (inputArr[i] !== inputArr[j]) {
        i++;
        inputArr[i] = inputArr[j];
      }
      j++;
    }
    return i + 1;
  }
  return i;
};
console.log(countUniqueValuesWithoutExtraVar([1, 2, 3, 3, 4, 4, 4, 4, 4, 7, 12, 13]));

/**another simple solution is using set */
function uniqueValues (arr){
  return new Set(arr).size;
}
console.log(uniqueValues([1, 2, 3, 3, 4, 4, 4, 4, 4, 7, 12, 13]));