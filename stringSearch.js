function stringSearch(string, e) {
  let count = 0
  for (i = 0; i < string.length - e.length; i++) {
    if (string.slice(i, i + e.length) === e) count++
  }
  return `${e} appears ${count} times`
}

console.log(
  stringSearch(
    'This is the long string that I want to run a serach on. It is a long string. So now this is an even bigger string so I just keep typing here for longer and longer strings.',
    'string'
  )
)
