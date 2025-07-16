/**
 * Write a function rotate(arr[], d, n) that rotates arr[] of size n by d elements.
  Example :
Input :  arr[] = [1, 2, 3, 4, 5, 6, 7]
         d = 2
Output : arr[] = [3, 4, 5, 6, 7, 1, 2] 

Algo :
  Let AB are the two parts of the input array where A = arr[0..d-1] and B = arr[d..n-1]. 
  The idea of the algorithm is :
  Reverse A to get ArB, where Ar is reverse of A.
  Reverse B to get ArBr, where Br is reverse of B.
  Reverse all to get (ArBr) r = BA.
  run :
  arr =  [1,2,3,4,5];
   d =2;
   A =[1,2] ,B =[3,4,5]
 given an array of n numbers [1,2,3,4,5] and rotate it 2 times ,d=2
first divide the array into two parts A=[0,d-1] , B=[d,n-1]
then reverse the first part A  in the entire array => ArB where Ar is reverse of A; => [2,1,3,4,5]
reverse the second part B  with entire array which means ArBr where Br is reverse of B => [2,1,5,4,3]
reverse the entire array BrAr  => [3,4,5,1,2]
this will give you the final result of rotating array by d times
 */

/** method 1 */
const reverse = (arr, start, end) => {
  while (start < end) {
    let tmp = arr[start];
    arr[start] = arr[end];
    arr[end] = tmp;
    start++;
    end--;
  }
};
/**
 * Rotates an array to the left by a specified number of positions using the reverse method.
 *
 * This function modifies the input array in place by reversing segments of the array
 * and then reversing the entire array to achieve the left rotation.
 *
 * @param {Array} inputArr - The array to be rotated.
 * @param {number} rotateByNo - The number of positions to rotate the array to the left.
 * @returns {Array} - The rotated array.
 */
const rotateArrayByReverse = (inputArr, rotateByNo) => {
  const arrLength = inputArr.length;
  reverse(inputArr, 0, rotateByNo - 1);
  reverse(inputArr, rotateByNo, arrLength - 1);
  reverse(inputArr, 0, arrLength - 1);
  return inputArr;
};
const array = [1, 2, 3, 4, 5, 6, 7];
const rotateByNo = 3;
const arrayRotated = rotateArrayByReverse(array, rotateByNo);
console.log(arrayRotated);

/** method 2 */
const rotateLeft = (array, d) => {
  for (let i = 0; i < d; i++) {
    array.push(array.shift());
  }
  return array;
};
//console.log(rotateLeft([1, 2, 3, 4, 5, 6, 7], rotateByNo));

/** method 3*/
const rotateBySlice = (array, d) => {
  return array.slice(d, array.length).concat(array.slice(0, d));
};
//console.log(rotateBySlice([1, 2, 3, 4, 5, 6, 7], rotateByNo));
