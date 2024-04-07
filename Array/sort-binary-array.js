/**
 * This is also example of multiple pointer pattern
 * 
 */
const swapNumbers = (arr, first, second) => {
  let temp;
  temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
};
const binaryArr = [1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0];

function sortBinaryArray(unsortedArr) {  // complexity - O(logn)
  let j = unsortedArr.length - 1,  
    i = 0;
  while (i < j) {
     if(unsortedArr[i] === 1) {
      swapNumbers(unsortedArr, i, j);
      j--;
    }
    i++;
  }
  return unsortedArr;
}
console.log(sortBinaryArray(binaryArr));


