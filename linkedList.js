class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }

  push(val) {
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }

  pop() {
    if (!this.head) return undefined
    let secondToLast = this.head
    for (let i = 0; i < this.length - 2; i++) {
      secondToLast = secondToLast.next
    }
    secondToLast.next = null
  }

  traverse() {
    let current = this.head
    while (current) {
      console.log(current.val)
      current = current.next
    }
  }
}

const list = new SinglyLinkedList()

list.push('teste')
list.push('blah')
list.push('inf')
list.push('teste2')
list.push('blah2')
list.push('inf2')

// console.log(list)
list.traverse()
console.log('====================')
list.pop()
console.log('====================')
list.traverse()
