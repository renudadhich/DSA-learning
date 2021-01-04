/* given two arrays [1,2,3] and [1,4,9] 
   need to check whether second array is containing exact number of elements in square form
exp: input: arr1=[1,2,1],arr2=[4,4,1]
     output :false
     input: arr1=[1,2,3],arr2=[1,4,9] 
     output :true
   input: arr1=[1,2,3],arr2=[1,9] 
     output :false
   */

//simple solution with O(n2) complexity
let normalArr = [1, 2, 1],
  squareArr = [4, 4, 1];
function checkSquareInArray(arr, squareArr) {
  let powitem;
  if (arr.length !== squareArr.length) {
    return false;
  }
  for (let item of arr) {
    powitem = Math.pow(item, 2);
    if (!squareArr.includes(powitem)) {
      return false;
    }
    squareArr.splice(squareArr.indexOf(powitem), 1);
  }

  return true;
}
checkSquareInArray(normalArr, squareArr);
