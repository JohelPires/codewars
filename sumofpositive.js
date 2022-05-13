function positiveSum(arr) {
    let result = 0
    arr.forEach(e => {
      if (e > 0) {
          result = result + e
      }
  });
  return result
}


positiveSum([1,-2,3,4,5])