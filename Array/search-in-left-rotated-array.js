/**
 * An element in a sorted array can be found in O(log n) time via binary search. 
 * But suppose we rotate an ascending order sorted array at some pivot unknown to you beforehand. 
 * So for instance, 1 2 3 4 5 might become 3 4 5 1 2. 
 * Devise a way to find an element in the rotated array in O(log n) time.
 * Example1 :
 * Input  : arr[] = {5, 6, 7, 8, 9, 10, 1, 2, 3};
         key = 3
Output : Found at index 8
Example 2
Input  : arr[] = {5, 6, 7, 8, 9, 10, 1, 2, 3};
         key = 30
Output : Not found

Algo : The idea is to find the pivot point, divide the array in two sub-arrays and perform binary search.
The main idea for finding pivot is – for a sorted (in increasing order) and pivoted array, 
pivot element is the only element for which next element to it is smaller than it.
1.first find pivot point in the array (pivot point in the exp 1 is 10)
2.then divide array of n numbers in two parts . first is Arr1(0,pivot-1) and second Arr2(pivot+1,n-1)
3.using binary search algo find element in the first array if element to find is greater than first Arr[0] (Arr is given array) Else  in the second array
4.If element is found in selected sub-array then return index
     Else return -1.
 */
const binarySearch = (inputArr, searchElement, low, high) => {
  if (low > high) return -1;
  const mid = Math.ceil((low + high) / 2);
  if (searchElement === inputArr[mid]) return mid;
  if (searchElement < inputArr[mid]) return binarySearch(inputArr, searchElement, low, mid - 1);

  return binarySearch(inputArr, searchElement, mid + 1, high);
};
/**
 * pivot is the number after which array is rotated
 */
const findPivotNumber = (inputArr, low, high) => {
  if (low > high) return -1;
  if (low === high) return low;
  const mid = Math.ceil((low + high) / 2);  
 if (mid < high && inputArr[mid] > inputArr[mid + 1]) {
    return mid;
  }
  if (low < mid && inputArr[mid - 1] > inputArr[mid]) {
    return mid - 1;
  }
  if (inputArr[low] >= inputArr[mid]) {     
    return findPivotNumber(inputArr, low, mid - 1);
  }
  return findPivotNumber(inputArr, mid + 1, high);
};

const findElementInRotated = (inputArr, searchElement) => {
  const low = 0;
  const high = inputArr.length - 1;

  let pivot = findPivotNumber(inputArr, low, high);
  if (pivot === -1)
    return binarySearch(inputArr, searchElement, low, high); /** it means array is not pivoted , only sorted */
  if (inputArr[pivot] === searchElement) return pivot;
  if (inputArr[0] <= searchElement) {
    return binarySearch(inputArr, searchElement, 0, pivot - 1);
  }
  return binarySearch(inputArr, searchElement, pivot + 1, high);
};
const rotatedArr = [3, 4, 5, 1, 2];
const search = 2;
const getIndexOfItem = (rotatedArr, search) => {
  const index = findElementInRotated(rotatedArr, search);
  if (index != -1) {
    console.log('element is found at index =>', index);
  } else {
    console.log('element is not found in the array');
  }
};
getIndexOfItem(rotatedArr, search);
getIndexOfItem([3,2,1,5,4], search);
