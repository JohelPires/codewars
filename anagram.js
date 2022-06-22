function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false
  }

  let fCounter1 = {}
  let fCounter2 = {}

  for (let char of str1) {
    fCounter1[char] = (fCounter1[char] || 0) + 1
  }
  for (let char of str2) {
    fCounter2[char] = (fCounter2[char] || 0) + 1
  }
  console.log(fCounter1)
  console.log(fCounter2)
  for (let key in fCounter1) {
    if (fCounter1[key] !== fCounter2[key]) {
      return false
    }
  }
  return true
}

console.log(anagram('texttwisttime', 'timetwisttext'))
