class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  push(val) {
    const newNode = new Node(val)
    if (this.size === 0) {
      this.first = newNode
      this.last = newNode
    } else {
      const oldFirst = this.first
      this.first = newNode
      this.first.next = oldFirst
    }
    this.size++
    return this.size
  }

  pop() {
    if (this.size === 0) return null
    const oldNode = this.first
    if (this.size === 1) {
      this.first = null
      this.last = null
      this.size = 0
      return oldNode
    }
    this.first = oldNode.next
    this.size--
    return oldNode
  }

  traverse() {
    let current = this.first
    console.log('size: ' + this.size)
    while (current) {
      console.log(current.val)
      current = current.next
    }
  }
}

const stack = new Stack()

stack.push(1)
stack.traverse()
