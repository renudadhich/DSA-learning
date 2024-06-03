/**
 * 557. Reverse Words in a String III
 * Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

 Example 1:

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Example 2:

Input: s = "Mr Ding"
Output: "rM gniD"
 

Constraints:

1 <= s.length <= 5 * 104
s contains printable ASCII characters.
s does not contain any leading or trailing spaces.
There is at least one word in s.
All the words in s are separated by a single space.
 */

const reverse = (str, start, end) => {
    let temp;
    while(start < end) {
        temp = str[end];
        str[end] = str[start];
        str[start] = temp;
        start++;
        end--;
    }
    return str;
}
    
// console.log(reverse("love".split(""), 0, 3));

const reverseWordsInString = (str) => {
    let strArr = str.split(""), start = 0, end=0;
  while(end < strArr.length) {
   if(strArr[end] === " ") {
     reverse(strArr, start, end-1);
    start = end+1;
   }
     end++;
   }
   //reverse last word
   reverse(strArr, start, end);
  return strArr.join("");
}

console.log(reverseWordsInString("i love programming very much"));