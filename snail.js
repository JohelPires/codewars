function snail(array) {
  const topLeft = [0, 0]
  const d = array[0].length - 1
  const bottomRight = [array[0].length, array[0].length]

  let result = [...array[0]]

  array[d].reverse().map((item) => result.push(item))
  return result
}

console.log(
  snail([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
)
//should return [1,2,3,6,9,8,7,4,5]

//   1 2 3
//   4 5 6
//   7 8 9

// [0][0] [0][1] [0][2]
// [1][0] [1][1] [1][2]
// [2][0] [2][1] [2][2]

// 01 02 03 04
// 05 06 07 08
// 09 10 11 12
// 13 14 15 16

// [0][0] [0][1] [0][2] [0][3]
// [1][0] [1][1] [1][2] [1][3]
// [2][0] [2][1] [2][2] [2][3]
// [3][0] [3][1] [3][2] [3][3]
