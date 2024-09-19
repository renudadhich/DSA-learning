/**
 * write a function called findLongestSubstring,which accepts a string
 * and returns the length of the longest substring with all distinct characters
 * examples :
 *
 */

const findLongestSubstring = (str) => {
  let substr = '';
  for (let char of str) {
    if (substr.indexOf(char) === -1) {
      substr += char;
    }
  }
  return substr;
};
// console.log(findLongestSubstring('rithmschool'));
 console.log(findLongestSubstring('thisisawesome'));

// using has and apssing all test cases
function longestUniqueSubsttr(s) {
  let set = new Set();
  let left = 0;
  let maxSize = 0;

  if (s.length === 0) return 0;
  if (s.length === 1) return 1;

  for (let i = 0; i < s.length; i++) {

      while (set.has(s[i])) {
          set.delete(s[left])
          left++;
      }
      set.add(s[i]);
      
      maxSize = Math.max(maxSize, i - left + 1);
  }
  return maxSize;
}

console.log(longestUniqueSubsttr("thisisawesome"));
