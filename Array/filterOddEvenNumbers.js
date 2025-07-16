// Write a function to partition an array so that all odd numbers 
// appear before even numbers, while preserving relative order.

// example :
// Input: [1, 2, 3, 4, 5]
// Output: [1, 3, 5, 2, 4]

const swap = (arr,source, target) => {
    [arr[source],arr[target]] = [arr[target],arr[source]];
};

const arr = [2,3,4,5,6,7];
const filterODDEven = (arr) => {  // odds first and even later
    let end = arr.length-1, start=0
    while(start < end) {
        if(arr[start]%2 === 0) {
            swap(arr, start, end);
            end--;
        } else {
          start++;
        }
    }
    return arr;
}

console.log(filterODDEven(arr))