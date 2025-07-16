aabbbcccdd => a2b3c3d2
/** encode above string into given format */

const encodeStr = (str) => {
   let prev = str[0];
   let count = 0;
   let output = "";
  
   for(var i= 0; i < str.length; i++) {
      if(prev !== str[i]) {
         output += `${prev}${count}`;
         prev = str[i];
         count = 1;
        
      } else {
         count++;
      }
     if(i === str.length-1) {
        output += `${prev}${count}`; 
     }

   }
   return output;
}

console.log(encodeStr("abbcccccdddt"));