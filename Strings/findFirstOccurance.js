// 28. Find the Index of the First Occurrence in a String

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.


const strStr = (haystack, needle) => {
    if (needle === '' || needle === haystack) return 0;    // the only mandatory check here is (needle === '')
    if (haystack.length < needle.length) return -1;        // the other ones are for efficiency
    
    for (let i = 0; i < haystack.length - needle.length + 1; i++) {    // start looping through haystack until the remaining substring is shorter than needle
      if (haystack[i] === needle[0]) {                // as soon as we see a character that matches the first character of needle
        for (let j = 0; j < needle.length; j++) {     // start looping through both needle and haystack
          if (needle[j] !== haystack[i + j]) {        // as soon as the characters don't match
            break;                                    // break out of the loop and return to looping through haystack
          } else if (j === needle.length - 1){        // otherwise, if we looped through the entire needle and all of the characters matched
            return i;                                 // return the index of the first character of haystack with which we started the loop
          }
        }
      }
    }
    
    return -1;                                        // return -1 if there wasn't a match
  };

  console.log(strStr("sadbutsad", "sad"));