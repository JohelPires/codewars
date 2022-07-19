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

console.log(mostDigits([323, 4, 34, 6345, 23, 1, 3]))
