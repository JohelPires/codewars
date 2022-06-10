function sumArr(arr) {
  if (arr.length === 0) return 0

  const rest = arr.slice(1)
  return arr[0] + sumArr(rest)
}

console.log(sumArr([2, 5, 1, 3])) //11

// const input = new Array(9000).fill(1)
