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
    this.length = 0
  }

  push(val) {
    const newNode = new Node(val)
    if (this.length === 0) {
      this.first = newNode
      this.last = newNode
    } else if (this.length === 1) {
      this.first = newNode
      this.first.next = this.last
    } else {
      const oldFirst = this.first
      this.first = newNode
      this.first.next = oldFirst
    }
    this.length++
    return this.length
  }

  pop() {
    if (this.length === 0) return null
    const oldNode = this.first
    if (this.length === 1) {
      this.first = null
      this.last = null
      this.length = 0
      return oldNode
    }
    this.first = oldNode.next
    this.length--
    return oldNode
  }

  traverse() {
    let current = this.first
    console.log('Length: ' + this.length)
    while (current) {
      console.log(current.val)
      current = current.next
    }
  }
}

const stack = new Stack()
