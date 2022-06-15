function snail(array) {
  const d = array[0].length //dimension
  let steps = d - 1
  console.log(d, steps)
  let row = 0
  let col = d - 1
  const result = []

  function moveRight(steps) {
    for (let i = 0; i <= steps; i++) {
      result.push(array[row][i])
    }
  }
  function moveDown(steps) {
    for (let i = 0; i <= steps; i++) {
      result.push(array[i][col])
    }
  }

  moveRight(steps)
  moveDown(steps)

  return result
}

// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]

// function snail(array) {
//   let dir = 'right' // direção de leitura
//   let n = array[0].length
//   let row = 0
//   const result = []

//   switch (dir) {
//     case 'right':
//       for (let i = 0; i < n; i++) {
//         result.push(array[row][i])
//       }
//       dir = 'down'
//     // n = n - 1
//     // break
//     case 'down':
//       for (let i = 1; i <= n; i++) {
//         result.push(array[i][n - 1])
//       }
//       dir = 'left'
//       n = n - 1
//       break

//     default:
//       break
//   }

// for (let i = 0; i <= n; i++) {
//   switch (dir) {
//     case 'left':
//       result.push(array[n][i])
//       break

//     default:
//       break
//   }
// }

//   console.log(result)
// }

console.log(
  snail([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
)

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
