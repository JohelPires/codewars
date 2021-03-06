function getDigit(num, pos) {
  const str = num.toString()
  const index = str.length - 1 - pos
  const result = Number(str[index])
  return result ? result : 0
}

function digitCount(num) {
  return num.toString().length
}

function mostDigits(arr) {
  let result = 0
  arr.map((e) => {
    const temp = digitCount(e)
    if (temp > result) {
      result = temp
    }
  })
  return result
}

function radixSort(arr) {
  const md = mostDigits(arr)
  for (let k = 0; k < md; k++) {
    let buckets = [[], [], [], [], [], [], [], [], [], []]
    for (let i = 0; i < arr.length; i++) {
      buckets[getDigit(arr[i], k)].push(arr[i])
    }

    arr = [].concat(...buckets)
    // console.log(arr)
  }
  return arr
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

console.log(radixSort(array))
