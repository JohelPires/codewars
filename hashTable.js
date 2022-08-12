class HashTable {
  constructor() {
    this.table = []
  }
  add(key, value) {
    this.table[hash(key)] = value
    return this.table
  }
  get(key) {
    return this.table[hash(key)]
  }
}

function hash(str, arrLen = 97) {
  let total = 0
  let PRIME = 31
  for (let i = 0; i < Math.min(str.length, 100); i++) {
    let char = str[i]
    let value = char.charCodeAt(0) - 96
    total = (total * PRIME + value) % arrLen
    console.log(total)
  }
  return total
}

const h = new HashTable()

h.add('pink', '#286212')
h.add('dodgerblue', '#007711')
h.add('orangered', '#FF2299')
h.add('lightgreen', '#212121')
h.add('red', '#886643')

console.log(h.get('pink'))

console.log(hash('example2'))
