function merge(arr1, arr2) {
  const result = []
  let i = 0
  let j = 0
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i])
      i++
    } else {
      result.push(arr2[j])
      j++
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i])
    i++
  }
  while (j < arr2.length) {
    result.push(arr2[j])
    j++
  }

  return result
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left, right)
}

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

console.log(mergeSort(array))
