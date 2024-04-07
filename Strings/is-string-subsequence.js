/** This is example of Multiple pointers
 * Write a function to check whether the characters in the first string form a subsequence of 
 * the characters in second string.In other words characters of first string appears somewhere in the 
 * second string ,without changing their order.
 * example isSubsequence("hello","hello world") /// true
 *         isSubsequence("sing","sting") /// true
 *         isSubsequence("abc","abracadabra") /// true
 *         isSubsequence("abc","acb") /// true
 */


const isSubsequence = (string1, string2) => {
  if (string1.length === 0 || string2.length === 0) {
    return false;
  }
  let i = 0, j = 0;
  while (j < string2.length) {
    if (string1[i] === string2[j]) i++;
    if (i === string1.length) return true;
    j++;
  }
  return false;
}
 console.log(isSubsequence("hello","hello world"));
 console.log(isSubsequence("sing","sting"));
 console.log(isSubsequence("abc","abracadabra"));
 console.log(isSubsequence("abc","acbe"));