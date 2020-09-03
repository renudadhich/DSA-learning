let duplicateArray = [10, 10, 10, 1, 1, 1, 5];
function countFrequencies(inputArr) {
  let frequencies = {},
    prev;

  for (let number = 0; number < inputArr.length; number++) {
    if (frequencies[inputArr[number]]) {
      frequencies[inputArr[number]] = frequencies[inputArr[number]] + 1;
    } else {
      frequencies[inputArr[number]] = 1;
    }
  }
  return frequencies;
}
countFrequencies(duplicateArray);
