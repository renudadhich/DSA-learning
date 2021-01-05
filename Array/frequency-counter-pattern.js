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
console.log(checkSquareInArray(normalArr, squareArr));
// solution with O(n) complexity

const checkSquareInArray2 = (str1,str2) =>{
  if(str1.length !== str2.length) {
      return false;
  }
  let frequencyCounter1 ={},frequencyCounter2={};
  for(let char of str1) {
    frequencyCounter1[char] =  (frequencyCounter1[char] || 0) +1;
  }
  for (let char of str2) {
    frequencyCounter2[char] =  (frequencyCounter2[char] || 0) +1;
  }
  for(let key in frequencyCounter1) {
      if(!frequencyCounter2[key**2] ) {
          return false;
      }
      if(frequencyCounter1[key]  !== frequencyCounter2[key**2]){
        return false;
      }
      
  }
  return true;
}
console.log(checkSquareInArray2([1,2,1], [4,1,1]));
