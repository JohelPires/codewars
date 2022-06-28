function checkCashRegister(price, cash, cid) {
  const change = []
  // Parse cid ==========
  const penny = cid[0][1]
  const nickel = cid[1][1]
  const dime = cid[2][1]
  const quarter = cid[3][1]
  const one = cid[4][1]
  const five = cid[5][1]
  const ten = cid[6][1]
  const twenty = cid[7][1]
  const hundred = cid[8][1]
  console.log(penny, nickel, dime, quarter, one, five, ten, twenty, hundred)

  // amount due =======
  let due = cash - price
  let notas

  // Verifica qual o troco máximo possível

  //   if (hundred / 100 > (due / 100).toFixed(2)) {
  notas = Math.floor((due / 100).toFixed(2))
  console.log('notas de 100: ' + notas)
  due = (due - notas * 100).toFixed(2)
  console.log(due)
  change.push(['HUNDRED', notas * 100])
  //   }

  console.log(due)

  // TWENTY:
  notas = Math.floor((due / 20).toFixed(2))
  console.log('notas de 20: ' + notas)
  due = (due - notas * 20).toFixed(2)
  console.log(due)
  change.push(['TWENTY', notas * 20])

  //   if (due > twenty) {
  //     due = (due - twenty).toFixed(2)
  //     change.push(['TWENTY', twenty])
  //   }
  console.log(due)

  notas = Math.floor((due / 10).toFixed(2))
  console.log('notas de 10: ' + notas)
  due = (due - notas * 10).toFixed(2)
  console.log(due)
  change.push(['TEN', notas * 10])

  //   if (due > ten) {
  //     due = (due - ten).toFixed(2)
  //     change.push(['TEN', ten])
  //   }
  console.log(due)
  if (five / 5 > (due / 5).toFixed(2)) {
    const notas = Math.floor((due / 5).toFixed(2))
    console.log('notas de 5: ' + notas)
    due = (due - notas * 5).toFixed(2)
    console.log(due)
    change.push(['FIVE', notas * 5])
  }
  console.log(due)
  if (due > one) {
    due = (due - one).toFixed(2)
    change.push(['one', one])
  }
  console.log(due)
  if (due > quarter) {
    due = (due - quarter).toFixed(2)
    change.push(['quarter', quarter])
  }
  console.log(due)
  if (due > dime) {
    due = (due - dime).toFixed(2)
    change.push(['dime', dime])
  }
  console.log(due)
  if (due > nickel) {
    due = (due - nickel).toFixed(2)
    change.push(['nickel', nickel])
  }
  console.log(due)
  if (due > penny) {
    due = (due - penny).toFixed(2)
    change.push(['penny', penny])
  }
  console.log(due)

  return change
}

console.log(
  checkCashRegister(19.5, 20, [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100],
  ])
) /
  // should return {status: "OPEN", change: [["QUARTER", 0.5]]}.

  console.log(
    checkCashRegister(3.26, 100, [
      ['PENNY', 1.01],
      ['NICKEL', 2.05],
      ['DIME', 3.1],
      ['QUARTER', 4.25],
      ['ONE', 90],
      ['FIVE', 55],
      ['TEN', 20],
      ['TWENTY', 60],
      ['ONE HUNDRED', 100],
    ])
  ) //should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
