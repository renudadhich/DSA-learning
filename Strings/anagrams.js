/***
 * Check whether two strings are anagrams or not (both strings are having same number of characters)
 * use frequency counter pattern to solve this problem in O(n) complexity
 * str1 = "aaz" str2 = "aza"; // true
 * str1="hello" str2 ="helo" // false
 */

const checkAnagrams = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  let frequencyCounter = {};
  for (let char of str1) {
    frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
  }
  for (let char of str2) {
    if (!frequencyCounter[char]) {
      return false;
    } else {
      frequencyCounter[char] = frequencyCounter[char] - 1;
    }
  }
  return true;
};
console.log(checkAnagrams('olleh', 'hello'));
