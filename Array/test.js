//move zeros to end in O(n)
const input = [1,0,1,1,1,0,0,1,1,1]

const swap = (arr, i, j) => {
   [arr[i], arr[j]] = [arr[j], arr[i]];
}
const moveZerosEnd = (input) => {
    let i = 0, j = input.length-1;
    while(i < j) {
     if(input[i] === 0) {
        swap(input, i, j);
        j--;
     } 
     i++;
    } 
    return input; 
}

console.log(moveZerosEnd(input));
const sortBinaryArray = (input) => {
  let i = 0, j = input.length-1;
  while(i < j) {
   if(input[i] === 1) {
      swap(input, i, j);
      j--;
   } 
   i++;
  } 
  return input;  
}
console.log(sortBinaryArray([1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0]));
