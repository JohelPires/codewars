function same(arr1, arr2) {
  const interArr = []
  arr1.map((item) => interArr.push(item * item))

  console.log(interArr)
}

same([1, 2, 3], [1, 4, 9])
