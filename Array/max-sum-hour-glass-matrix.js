/**link : https://www.geeksforgeeks.org/maximum-sum-hour-glass-matrix/
 * An hour glass is made of 7 cells
in following form.
    A B C
      D
    E F G
Input : 1 1 1 0 0 
        0 1 0 0 0 
        1 1 1 0 0 
        0 0 0 0 0 
        0 0 0 0 0 
Output : 7
Below is the hour glass with
maximum sum:
1 1 1 
  1
1 1 1
A matrix can have (R-2)*(C-2) hourglasses ,above matrix will have 3*3 = 9 hourglasses 
 */

const maxSumOfHourGlass = (inputArr) => {
  let maxSum = Number.MIN_SAFE_INTEGER;
  const rowLength = inputArr[0].length,
    colLength = inputArr.length;
  if (rowLength < 3 || colLength < 3) return -1;
  for (let row = 0; row < rowLength - 2; row++) {
    for (let col = 0; col < colLength - 2; col++) {
      let sum =
        inputArr[row][col] +
        inputArr[row][col + 1] +
        inputArr[row][col + 2] +
        inputArr[row + 1][col + 1] +
        inputArr[row + 2][col] +
        inputArr[row + 2][col + 1] +
        inputArr[row + 2][col + 2];
        maxSum = Math.max(sum, maxSum);
    }
  }
  return maxSum;
};
const matrix = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];
console.log('max matrix sum', maxSumOfHourGlass(matrix));
const matrix2 = [
  [-1, -1, 0, -9, -2, -2],
  [-2, -1, -6, -8, -2, -5],
  [-1, -1, -1, -2, -3, -4],
  [-1, -9, -2, -4, -4, -5],
  [-7, -3, -3, -2, -9, -9],
  [-1, -3, -1, -2, -4, -5],
];
console.log('max matrix sum', maxSumOfHourGlass(matrix2));
