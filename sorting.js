function bbSort(arr) {
  let noSwaps
  for (let i = arr.length - 1; i >= 0; i--) {
    noSwaps = true
    for (let j = 0; j < i; j++) {
      console.log(arr, arr[j], arr[j + 1])
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        noSwaps = false
      }
    }
    if (noSwaps) break
  }
  return arr
}

const array3 = [5, 3, 4, 1, 2]

// function swap(arr, a, b)

function insertionSort(arr) {
  // const left =

  for (let i = 1; i < arr.length; i++) {
    let current = arr[i]
    for (var j = i - 1; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = current
    console.log(arr)
  }

  return arr
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    console.log(arr)
    // console.log('Swaping: ')
    if (i !== min) {
      let temp = arr[i]
      arr[i] = arr[min]
      arr[min] = temp
    }
    // console.log(arr)
  }
  return arr
}

const array2 = [6138, 5696, 2459, 4218, 465]

const array = [
  6138, 5696, 2459, 4218, 465, 4958, 2925, 1832, 6206, 3847, 8984, 449, 5668,
  6586, 9203, 5848, 9034, 165, 3180, 2888, 7031, 5475, 1532, 3593, 482, 2484,
  7015, 392, 4741, 5246, 7547, 5761, 1808, 3977, 6818, 4816, 2508, 7537, 8111,
  6730, 692, 3905, 4834, 839, 1135, 8172, 1753, 1410, 4697, 3843, 8349, 1008,
  2484, 9878, 7265, 6275, 7982, 7430, 5881, 8150, 9485, 1270, 4252, 4932, 2937,
  5480, 8119, 1782, 9358, 9003, 5203, 634, 7735, 5337, 3829, 288, 4466, 5254,
  3569, 4634, 2659, 5446, 161, 2074, 6053, 9142, 9850, 1765, 9495, 8930, 9139,
  8505, 664, 8219, 9258, 7062, 3622, 310, 1358, 3665,
]

console.log(insertionSort(array2))
