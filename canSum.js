function canSum(target, arr) {
  if (target === 0) return true
  if (target < 0) return false

  for (let num of arr) {
    const remainder = target - num
    if (canSum(remainder, arr) === true) {
      return true
    }
  }

  return false
}

console.log(canSum(8, [2, 3, 5]))
console.log(canSum(50, [2, 3, 5]))
console.log(canSum(24, [3, 5]))
console.log(canSum(29, [4, 7, 9, 2, 2, 3, 5]))
console.log(canSum(300, [7, 14]))
