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
    if (this.length === 1) {
      let temp = this.head
      this.length = 0
      this.head = null
      this.tail = null
      return temp
    }
    let secondToLast = this.head
    for (let i = 0; i < this.length - 2; i++) {
      secondToLast = secondToLast.next
    }
    secondToLast.next = null
    const poppedItem = this.tail
    this.tail = secondToLast
    this.length--
    return poppedItem
  }

  shift() {
    if (!this.head) return undefined
    const oldHead = this.head
    if (this.length === 1) {
      let temp = this.head
      this.length = 0
      this.head = null
      this.tail = null
      return temp
    }
    this.head = oldHead.next
    this.length--
    return oldHead
  }

  unshift(val) {
    if (!this.head) return this.push(val)
    const newNode = new Node(val)
    const oldHead = this.head
    this.head = newNode
    this.head.next = oldHead
    this.length++
    return this
  }

  traverse() {
    if (!this.head) return undefined
    let current = this.head
    while (current) {
      console.log(current.val)
      current = current.next
    }
  }
}

const list = new SinglyLinkedList()

list.push('teste')
list.push(234)
list.push(12342)
list.push(122)
list.push(1342)
list.push(12312)

// console.log(list)
list.traverse()
console.log('====================')
console.log(list.unshift('first element'))
console.log('====================')
list.traverse()
