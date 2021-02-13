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
console.log(findLongestSubstring('rithmschool'));
console.log(findLongestSubstring('thisisawesome'));
function findLongestSubstring1(str) {
  let longest = 0;
  // Creating a set to store the last positions of occurrence
  let seen = {};
  // starting the inital point of window to index 0
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    // # Checking if we have already seen the element or not
    if (seen[char]) {
      //  If we have seen the number, move the start pointer
      //      to position after the last occurrence
      start = Math.max(start, seen[char] + 1);
    }
    // index - beginning of substring + 1 (to include current in count)
    // Updating the last seen value of the character
    longest = Math.max(longest, i - start + 1);

    // store the index of the next char so as to not double count
    seen[char] = i;
  }
  return longest;
}
console.log(findLongestSubstring1('rithmsc hool'));
console.log(findLongestSubstring1('this is awesom e'));
