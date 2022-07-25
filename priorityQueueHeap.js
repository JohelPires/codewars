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

  bubbleUp() {}

  enqueue(val, priority) {
    const newNode = new Node(val, priority)
    this.values.push(newNode)
    this.bubbleUp()
  }
}

const q = new PriorityQueue()

q.enqueue('first', 2)
q.enqueue('sec', 5)
q.enqueue('third', 2)
q.enqueue('fourth', 3)
q.enqueue('five', 1)

console.log(q.values)
