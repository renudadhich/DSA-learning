// 856. Score of Parentheses

// Given a balanced parentheses string s, return the score of the string.

// The score of a balanced parentheses string is based on the following rule:

// "()" has score 1.
// AB has score A + B, where A and B are balanced parentheses strings.
// (A) has score 2 * A, where A is a balanced parentheses string.
 

// Example 1:

// Input: s = "()"
// Output: 1
// Example 2:

// Input: s = "(())"
// Output: 2
// Example 3:

// Input: s = "()()"
// Output: 2
 

// Constraints:

// 2 <= s.length <= 50
// s consists of only '(' and ')'.
// s is a balanced parentheses string.


const scopeOfParantheses = (str) => {
    let stack = [0];
    for (let index = 0; index < str.length; index++) {
        if(str[index] === "(") {
           stack.push(0);
        } else {
            if(stack[stack.length-1] === 0) {
                stack.pop();
                stack[stack.length-1] += 1;
                
            } else {
              let popped =  stack.pop();
              stack[stack.length-1] += popped *2;
            }
        }
    }
    return stack.pop();
}

//console.log(scopeOfParantheses("()()"));
console.log(scopeOfParantheses("(()())"));
