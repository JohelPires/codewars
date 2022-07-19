function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }

  let pivotIndex = start
  let pivot = arr[start]
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      pivotIndex++
      swap(arr, pivotIndex, i)
    }
  }
  swap(arr, start, pivotIndex)
  return pivotIndex
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right)

    //left:
    quickSort(arr, left, pivotIndex - 1)

    //right:
    quickSort(arr, pivotIndex + 1, right)
  }
  return arr
}

const array = [61, 56, 24, 42, 4, 49, 29, 18, 62, 38, 89, 44, 5]
const array2 = [4, 8, 2, 1, 5, 7, 6, 3] //should return 3

// arr[i]  arr[start]   pivotIndex

//   56        61           7

console.log(quickSort(array))
