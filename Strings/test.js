const isValid = (str) => {
    const brackets = {"{": "}", "(" : ")", "[": "]"};
    const closingBrackets = ["}", ")", "]"];
    if(str.length <= 1) return false;
    let openArr = [];
   for(let index = 0; index < str.length; index++) {
    const value = str[index];
     if(brackets[value]) {
        openArr.push(value);
     } else if(closingBrackets.includes(value)) {
        if(!openArr.length || brackets[openArr[openArr.length-1]] !== value) {
            return false;
        }
        openArr.pop();
     }
     
   }
   
   return !openArr.length;
};

console.log(isValid("([]){"));