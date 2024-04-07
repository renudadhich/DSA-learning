/**
 * given an sorted array of integers and a value. write a function search that accepts array and value as paramaters
 * returns the index where the value passed to function is located, if not found return -1.
 *
 * examples :
 * search([1,2,3,4,5,6],4) == > 3
 * search([1,2,3,4,5,6],6) ==>5
 * search([1,2,3,4,5,6],11) ==> -1
 * search([],11) ==> -1
 *
 * it uses divide and conquer approach
 * recursive approach complexity O(logn)
 */
const sortedArr = [1, 2, 3, 4, 5, 6];
let high = sortedArr.length - 1;
let low = 0;
const binarySearch = (value, low, high) => {
  if (!sortedArr.length) {
    return -1;
  }
  let mid = Math.floor((low + high) / 2);
   if (sortedArr[low] > sortedArr[high]) {
    return 'not valid input';
  }
  if (sortedArr[mid] === value) {
    return mid;
  }
  if (value > sortedArr[mid]) {
   return binarySearch(value, mid + 1, high);
  } else {
    return binarySearch(value, low, mid-1);
  }
};
// console.log(binarySearch(6, low, high));
// console.log(binarySearch(1, low, high));
// console.log(binarySearch(5, low, high));

/**
 * normal approach 
 */
const search =(inputArr,value)=> {
    let min =0;
    let max = inputArr.length-1;
    while(min < max){
        let mid =Math.floor((min+max)/2);
        console.log("mid",mid);
        if(inputArr[mid]<value) {
            min = mid+1;
        } else if(inputArr[mid]>value) {
            max = mid-1;
        } else {
            return mid;
        }
    }
    return -1;
}
console.log(search([1,2,3,4,5,6],5));