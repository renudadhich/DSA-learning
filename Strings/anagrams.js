/***
 * Check whether two strings are anagrams or not (both strings are having same number of characters)
 * use frequency counter pattern to solve this problem in O(n) complexity
 * str1 = "aaz" str2 = "aza"; // true
 * str1="hello" str2 ="helo" // false
 */

 const checkAnagrams = (str1,str2) =>{
     if(str1.length !== str2.length) {
         return false;
     }
     let frequencyCounter ={};
     for(let char of str1) {
        frequencyCounter[char] =  (frequencyCounter[char] || 0) +1;
     }
     for (let char of str2) {
        frequencyCounter[char] =  (frequencyCounter[char] || 0) -1;
     }
     for(let key in frequencyCounter) {
         if(frequencyCounter[key] === -1 || frequencyCounter[key] !==0) {
             return false;
         }
         
     }
     return true;
 }
 console.log(checkAnagrams("hello",""));