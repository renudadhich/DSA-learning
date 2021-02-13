/**
 * This is one of the example of multi pointer pattern
 * to solve problem in O(n) complexity
 * write a fucntion called averagePair.Given a sorted array of integers and target average, determine
 * if there is a pair of values in the array where the average of the pair equals to the target average.
 * there can be more than one pair that matches average target.
 * exp. averagePair([1,2,3],2.5) // true
 *  averagePair([1,3,3,5,6,7,10,12,19],8) // true
 *  averagePair([-1,0,3,4,5,6],4.1) // false
 *    averagePair([],4) // false
 */

const averagePair = (inputArr, target) => {
  if (inputArr.length === 0) return false;
  let left = 0,
    right = inputArr.length - 1,
    average;
  while (left < right) {
    average = (inputArr[left] + inputArr[right]) / 2;
    if (average > target) {
      right--;
    } else if (average < target) {
      left++;
    } else {
       return true;
    }
  }
  return false;
};

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
console.log(averagePair([], 4));
