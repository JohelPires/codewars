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
  const totalInRegister = Number(
    (
      penny +
      nickel +
      dime +
      quarter +
      one +
      five +
      ten +
      twenty +
      hundred
    ).toFixed(2)
  )

  // amount due =======
  let due = Number((cash - price).toFixed(2))
  console.log(totalInRegister < due)
  let result = {}
  if (totalInRegister < due) {
    result.status = 'INSUFFICIENT_FUNDS'
    result.change = []
    return result
  }
  if (totalInRegister === due) {
    result.status = 'CLOSED'
    result.change = [...cid]
    return result
  }
  if (totalInRegister > due) {
    result.status = 'OPEN'
  }

  // Verifica qual o troco máximo possível

  if (due > 100 && hundred > 100) {
    const requiredBills = Math.floor(due / 100)
    const availableBills = hundred / 100
    if (availableBills > requiredBills) {
      due = (due - requiredBills * 100).toFixed(2)
      change.push(['ONE HUNDRED', requiredBills * 100])
    } else {
      due = (due - hundred).toFixed(2)
      change.push(['ONE HUNDRED', hundred])
    }
  }

  if (due > 20 && twenty > 20) {
    const requiredBills = Math.floor(due / 20)
    const availableBills = twenty / 20
    if (availableBills > requiredBills) {
      due = (due - requiredBills * 20).toFixed(2)
      change.push(['TWENTY', requiredBills * 20])
    } else {
      due = (due - twenty).toFixed(2)
      change.push(['TWENTY', twenty])
    }
  }

  if (due > 10 && ten > 10) {
    const requiredBills = Math.floor(due / 10)
    const availableBills = ten / 10
    if (availableBills > requiredBills) {
      due = (due - requiredBills * 10).toFixed(2)
      change.push(['TEN', requiredBills * 10])
    } else {
      due = (due - ten).toFixed(2)
      change.push(['TEN', ten])
    }
  }

  if (due > 5 && five > 5) {
    const requiredBills = Math.floor(due / 5)
    const availableBills = five / 5
    if (availableBills > requiredBills) {
      due = (due - requiredBills * 5).toFixed(2)
      change.push(['FIVE', requiredBills * 5])
    } else {
      due = (due - five).toFixed(2)
      change.push(['FIVE', five])
    }
  }

  if (due > 1 && one > 1) {
    const requiredBills = Math.floor(due / 1)
    const availableBills = one / 1
    if (availableBills > requiredBills) {
      due = (due - requiredBills * 1).toFixed(2)
      change.push(['ONE', requiredBills * 1])
    } else {
      due = (due - one).toFixed(2)
      change.push(['ONE', one])
    }
  }

  if (due > 0.25 && quarter > 0.25) {
    const requiredBills = Math.floor(due / 0.25)
    const availableBills = quarter / 0.25
    if (availableBills > requiredBills) {
      due = (due - requiredBills * 0.25).toFixed(2)
      change.push(['QUARTER', requiredBills * 0.25])
    } else {
      due = (due - quarter).toFixed(2)
      change.push(['QUARTER', quarter])
    }
  }

  if (due > 0.1 && dime > 0.1) {
    const requiredBills = Math.floor(due / 0.1)
    const availableBills = dime / 0.1
    if (availableBills > requiredBills) {
      due = (due - requiredBills * 0.1).toFixed(2)
      change.push(['DIME', requiredBills * 0.1])
    } else {
      due = (due - dime).toFixed(2)
      change.push(['DIME', dime])
    }
  }

  if (due > 0.05 && nickel > 0.05) {
    const requiredBills = Math.floor(due / 0.05)
    const availableBills = nickel / 0.05
    if (availableBills > requiredBills) {
      due = (due - requiredBills * 0.05).toFixed(2)
      change.push(['NICKEL', requiredBills * 0.05])
    } else {
      due = (due - nickel).toFixed(2)
      change.push(['NICKEL', nickel])
    }
  }

  if (due > 0.01 && penny > 0.01) {
    const requiredBills = Math.floor(due / 0.01)
    const availableBills = penny / 0.01
    if (availableBills > requiredBills) {
      due = (due - requiredBills * 0.01).toFixed(2)
      change.push(['PENNY', requiredBills * 0.01])
    } else {
      due = (due - penny).toFixed(2)
      change.push(['PENNY', penny])
    }
  }
  console.log(due)
  if (due > 0) {
    console.log('NÃO DEU PRA DAR TROCO')
    result.status = 'INSUFFICIENT_FUNDS'
    result.change = []
    return result
  }
  result.change = change
  return result
}

// console.log(
//   checkCashRegister(19.5, 20, [
//     ['PENNY', 1.01],
//     ['NICKEL', 2.05],
//     ['DIME', 3.1],
//     ['QUARTER', 4.25],
//     ['ONE', 90],
//     ['FIVE', 55],
//     ['TEN', 20],
//     ['TWENTY', 60],
//     ['ONE HUNDRED', 100],
//   ])
// )
// should return {status: "OPEN", change: [["QUARTER", 0.5]]}.

//   console.log(
//     checkCashRegister(3.26, 100, [
//       ['PENNY', 1.01],
//       ['NICKEL', 2.05],
//       ['DIME', 3.1],
//       ['QUARTER', 4.25],
//       ['ONE', 90],
//       ['FIVE', 55],
//       ['TEN', 20],
//       ['TWENTY', 60],
//       ['ONE HUNDRED', 100],
//     ])
//   )
//should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

// console.log(
//   checkCashRegister(19.5, 20, [
//     ['PENNY', 0.01],
//     ['NICKEL', 0],
//     ['DIME', 0],
//     ['QUARTER', 0],
//     ['ONE', 0],
//     ['FIVE', 0],
//     ['TEN', 0],
//     ['TWENTY', 0],
//     ['ONE HUNDRED', 0],
//   ])
// )
//should return {status: "INSUFFICIENT_FUNDS", change: []}.

// console.log(
//   checkCashRegister(19.5, 20, [
//     ['PENNY', 0.01],
//     ['NICKEL', 0],
//     ['DIME', 0],
//     ['QUARTER', 0],
//     ['ONE', 1],
//     ['FIVE', 0],
//     ['TEN', 0],
//     ['TWENTY', 0],
//     ['ONE HUNDRED', 0],
//   ])
// )
//should return {status: "INSUFFICIENT_FUNDS", change: []}.

// console.log(
//   checkCashRegister(19.5, 20, [
//     ['PENNY', 0.5],
//     ['NICKEL', 0],
//     ['DIME', 0],
//     ['QUARTER', 0],
//     ['ONE', 0],
//     ['FIVE', 0],
//     ['TEN', 0],
//     ['TWENTY', 0],
//     ['ONE HUNDRED', 0],
//   ])
// )
//should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.

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
)

//should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
