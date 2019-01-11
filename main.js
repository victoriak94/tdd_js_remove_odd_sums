function removeOddSum(arr, a, b) {

  evenSumArray = arr.slice(0);

  for (i = 0; i < arr.length; i++) {
    if ((arr[i][a] + arr[i][b]) % 2 !== 0) {
      evenSumArray.splice(arr.indexOf(evenSumArray[i]), 1);
    }
  }
  return evenSumArray;
}

module.exports = removeOddSum;
