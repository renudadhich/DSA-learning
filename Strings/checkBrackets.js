var str1 = '(a+b)'; // valid
var str2 = '{a(+b})'; // invalid
var str3 = '(a{+b)})'; // invalid
const checkBrackets = (inputStr) => {
  let closingBrackets = [')', '}', ']'];
  let openArray = [];
  let brackets = { '{': '}', '(': ')', '[': ']' };
  for (let i = 0; i < inputStr.length; i++) {
    let value = inputStr[i];
    if (brackets[value]) {
      openArray.push(value);
    } else if (closingBrackets.includes(value)) {
      let lastElement = openArray.pop();
      if (brackets[lastElement] !== value) {
        return 'InValid string';
      }
    }
  }
  return 'valid string';
};
console.log(checkBrackets(str2));
