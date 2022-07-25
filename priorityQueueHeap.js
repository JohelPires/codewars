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

  bubbleDown() {}

  enqueue(val, priority) {
    const newNode = new Node(val, priority)
    this.values.push(newNode)
    this.bubbleUp()
  }
  dequeue() {
    const firstInLine = this.values[0]

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
