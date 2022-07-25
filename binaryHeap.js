class BinaryHeap {
  constructor() {
    this.values = []
  }

  insert(val) {
    this.values.push(val)
    let index = this.values.length - 1
    let parentIndex = Math.floor((index - 1) / 2)
    while (this.values[parentIndex] < this.values[index]) {
      //swap
      const temp = this.values[index]
      this.values[index] = this.values[parentIndex]
      this.values[parentIndex] = temp
      index = parentIndex
      parentIndex = Math.floor((index - 1) / 2)
    }
  }
  extractMax() {
    // this.values.shift()
    // let current = this.values[0]
    ;[this.values[this.values.length - 1], this.values[0]] = [
      this.values[0],
      this.values[this.values.length - 1],
    ]
    const popped = this.values.pop()
  }
}

const bh = new BinaryHeap()

bh.insert(27)
bh.insert(12)
bh.insert(33)
bh.insert(39)
bh.insert(18)
// bh.insert(27)
bh.insert(41)
bh.insert(55)
// bh.insert(200)
console.log(bh)
bh.extractMax()
console.log(bh)
