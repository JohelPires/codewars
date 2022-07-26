class Node {
  constructor(val, priority) {
    this.val = val
    this.priority = priority
  }
}
class PriorityQueue {
  constructor() {
    this.values = []
  }

  bubbleUp() {
    let idx = this.values.length - 1
    let e = this.values[idx]
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2)
      let parent = this.values[parentIdx]
      if (e.priority >= parent.priority) break
      this.values[parentIdx] = e
      this.values[idx] = parent
      idx = parentIdx
    }

    // compare current with parent
    // if smaller, swap. else break
    //
  }

  bubbleDown() {
    let idx = 0
    const len = this.values.length
    const e = this.values[0]

    while (true) {
      let leftChildIdx = 2 * idx + 1
      let rightChildIdx = 2 * idx + 2
      let leftChild, rightChild
      let swap = null

      if (leftChildIdx < len) {
        leftChild = this.values[leftChildIdx]
        if (leftChild.priority < e.priority) swap = leftChildIdx
      }
      if (rightChildIdx < len) {
        rightChild = this.values[rightChildIdx]
        if (
          (swap === null && rightChild.priority < e.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        )
          swap = rightChildIdx
      }

      if (swap === null) break
      this.values[idx] = this.values[swap]
      this.values[swap] = e
      idx = swap
    }
  }

  enqueue(val, priority) {
    const newNode = new Node(val, priority)
    this.values.push(newNode)
    this.bubbleUp()
  }
  dequeue() {
    const firstInLine = this.values[0]
    this.values[0] = this.values.pop()
    if (this.values.length <= 1) return this.values.pop()

    this.bubbleDown()

    return firstInLine
  }
}

const q = new PriorityQueue()

q.enqueue('first', 2)
q.enqueue('sec', 5)
q.enqueue('third', 2)
q.enqueue('fourth', 3)
q.enqueue('five', 1)
q.enqueue('six', 1)
q.enqueue('seven', 1)

console.log(q.values)

console.log('dequeue:')
console.log(q.dequeue())
console.log('dequeue:')
console.log(q.dequeue())
console.log('dequeue:')
console.log(q.dequeue())
// console.log(q.dequeue())
// console.log(q.dequeue())
// console.log(q.dequeue())
// console.log(q.dequeue())
// console.log(q.dequeue())
// console.log(q.dequeue())

console.log(q.values)
