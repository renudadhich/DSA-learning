/**
 *
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

const inputArr = [6, 3, 8, 10, 7, 4, 5, 2, 1, 9];
console.log('minimum swaps', minimumSwaps(inputArr));
console.log('minimum swaps', minimumSwaps([1, 4, 2, 3]));
