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

function sortBinaryArray(unsortedArr) {
  let j = unsortedArr.length - 1,
    i = 0;
  while (i < j) {
    if (unsortedArr[i] === 0) i++;
    else {
      swapNumbers(unsortedArr, i, j);
      j--;
    }
  }
  return unsortedArr;
}
console.log(sortBinaryArray(binaryArr));
