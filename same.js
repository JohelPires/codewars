// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false
//   }

//   for (let i = 0; i < arr1.length; i++) {
//     let cIndex = arr2.indexOf(arr1[i] ** 2)
//     if (cIndex === -1) {
//       return false
//     }
//     arr2.splice(cIndex, 1)
//   }
// }
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }

  let fCounter1 = {}
  let fCounter2 = {}
  for (let val of arr1) {
    fCounter1[val] = (fCounter1[val] || 0) + 1
  }
  for (let val of arr2) {
    fCounter2[val] = (fCounter2[val] || 0) + 1
  }
  console.log(fCounter1)
  console.log(fCounter2)

  for (let key in fCounter1) {
    if (!(key ** 2 in fCounter2)) {
      return false
    }
    if (fCounter2[key ** 2] !== fCounter1[key]) {
      return false
    }
  }
  return true
}
console.log(same([1, 2, 3, 2], [1, 4, 4, 9]))
