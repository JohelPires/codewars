function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }

  for (let i = 0; i < arr1.length; i++) {
    let cIndex = arr2.indexOf(arr1[i] ** 2)
    if (cIndex === -1) {
      return false
    }
    arr2.splice(cIndex, 1)
  }
}
console.log(same([1, 2, 3], [1, 3, 9]))
