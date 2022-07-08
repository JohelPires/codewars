function binarySearch(array, value) {
  let left = 0
  let right = array.length

  while (left < right) {
    const mid = Math.floor((right + left) / 2)
    if (array[mid] > value) {
      right = mid - 1
    } else if (array[mid] < value) {
      left = mid + 1
    } else {
      return mid
    }
  }
  return -1
}

const array = [
  1, 2, 4, 5, 6, 8, 9, 11, 13, 17, 19, 22, 26, 28, 29, 33, 34, 37, 39, 40, 42,
  44, 45, 57, 48, 49, 50,
]

console.log(binarySearch(array, 34))
