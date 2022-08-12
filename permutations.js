function permutations(arr) {
  if (arr.length === 0) return [[]]
  const firstEl = arr[0]
  const rest = arr.slice(1)
  permutations(rest)
}

console.log(permutations(['a', 'b', 'c']))

// [
//     [c,b,a]
//     [b,c,a]
//     [b,a,c]
//     [c,a,b]
//     [a,c,b]
//     [a,b,c]
// ]
