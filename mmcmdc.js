function resolver(num1, num2) {
  // SEU CODIGO AQUI

  let restoA
  let restoB
  let a = Math.max(num1, num2)
  let b = Math.min(num1, num2)
  let cont = a + 1

  while (true) {
    restoA = cont % a
    restoB = cont % b
    if (restoA == 0 && restoB == 0) {
      return cont
    }
    cont += 1
  }
}

function mdc(nums) {
  //   let num1 = nums[0]
  //   let num2 = nums[1]
  nums.sort((a, b) => b - a)

  let resto
  let valor = nums[nums.length - 1]
  const temp = []

  for (let i = valor; i >= 0; i--) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] % valor == 0) {
        temp.push(true)
      }
    }

    if (temp.reduce((t, c) => t && c)) {
      return valor
    }
  }
}

console.log(mdc([15, 25, 35]))
// console.log(resolver(4, 12))
