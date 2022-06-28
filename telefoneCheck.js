function telephoneCheck(str) {
  if (/^\d{3}[\-\s]{0,1}\d{3}[\-\s]{0,1}\d{4}$/.test(str)) {
    return true
  } else if (/^\(\d{3}\)[\s]{0,1}\d{3}[\-]{0,1}\d{4}$/.test(str)) {
    return true
  } else if (/^\d{1}\s\d{3}\s\d{3}\s\d{4}$/.test(str)) {
    return true
  }
  return false
}

console.log(telephoneCheck('555asdcvw-555-5555'))
console.log(telephoneCheck('555-555-5555')) //ok
console.log(telephoneCheck('(555)555-5555')) //ok
console.log(telephoneCheck('(555) 555-5555')) //ok
console.log(telephoneCheck('555 555 5555')) //ok
console.log(telephoneCheck('1 555 555 5555')) //ok

console.log('from test:')
console.log(telephoneCheck('1 555)555-5555')) // should return false.
console.log(telephoneCheck('(6054756961)')) // should return false.
console.log(telephoneCheck('2 (757) 622-7382')) // should return false.
console.log(telephoneCheck('0 (757) 622-7382')) // should return false.
console.log(telephoneCheck('-1 (757) 622-7382')) // should return false.
console.log(telephoneCheck('2 757 622-7382')) // should return false.
console.log(telephoneCheck('10 (757) 622-7382')) // should return false.
console.log(telephoneCheck('27576227382')) // should return false.
console.log(telephoneCheck('(275)76227382')) // should return false.
console.log(telephoneCheck('2(757)6227382')) // should return false.
console.log(telephoneCheck('2(757)622-7382')) //should return false.
console.log(telephoneCheck('(555-555-5555')) //should return false.
console.log(telephoneCheck('11 555-555-5555')) // should return false.

// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
