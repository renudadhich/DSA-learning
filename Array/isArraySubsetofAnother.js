var arr1 = [1,2,3,4,5], arr2 = [1, 0];

const isSubset = (arr1, arr2) => {
    if(arr1.length == 0 || arr2.length == 0) return false;
    var i = 0, j = 0;
   while (j <= arr1.length) {
      if(arr1[j] === arr2[i]) i++;
      if(i === arr2.length ) {
        return true;
      }
      j++;
   }
  return false;
}

console.log(isSubset(arr1, arr2));