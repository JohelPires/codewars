function countUniqueValues(arr) {
  const count = {}
  for (let val of arr) {
    count[val] ? (count[val] = count[val] + 1) : (count[val] = 1)
    console.log(val)
  }

  return Object.keys(count).length
}

console.log(countUniqueValues([1, 1, 1, 1, 2]))
