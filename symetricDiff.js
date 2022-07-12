function sym(args) {
  const n = arguments.length
  const intersection = []
  const union = []
  const symDiff = []

  console.log('___________________________')
  for (let i = 0; i < n; i++) {
    console.log(arguments[i])
    //UNION:

    arguments[i].forEach((e) => {
      if (!union.includes(e)) union.push(e)
    })

    //INTERSECTION:
    arguments[0].forEach((e) => {
      if (arguments[1].includes(e)) {
        intersection.push(e)
      }
    })
  }

  const unionNoDuplicates = union
    .filter((e, i) => union.indexOf(e) === i)
    .sort((a, b) => a - b)
  const intersecNoDuplicates = intersection
    .filter((e, i) => intersection.indexOf(e) === i)
    .sort((a, b) => a - b)

  //SYMMETRIC DIFFERENCE (UNION - INTERSECTION):
  unionNoDuplicates.forEach((e) => {
    if (!intersecNoDuplicates.includes(e)) symDiff.push(e)
  })

  console.log('---UNION:')
  console.log(unionNoDuplicates)
  console.log('---INTERSECTION:')
  console.log(intersecNoDuplicates)
  console.log('symdiff:')
  return symDiff.sort((a, b) => a - b)
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]))
console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])) // should return [1, 4, 5].
//console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])) // should return [2, 3, 4, 6, 7].
