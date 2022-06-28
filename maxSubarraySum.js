function maxSubarraySum(arr, num) {
  let temp = 0
  let max = 0
  for (let i = 0; i < num; i++) {
    temp += arr[i]
  }
  temp = max
  for (let i = num; i < arr.length; i++) {
    temp = temp - arr[i - num] + arr[i]
    if (temp > max) {
      max = temp
    }
  }
  return max
}

console.log(
  maxSubarraySum([1, 2, 6, 4, 6, 8, 4, 7, 9, 4, 3, 6, 8, 9, 4, 3, 6], 3)
)
