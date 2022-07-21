import colors from 'colors'
class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode

      this.tail = newNode
      this.length++
      return this
    }

    const oldTail = this.tail
    this.tail = newNode
    this.tail.prev = oldTail
    this.tail.prev.next = this.tail
    this.length++
    return this
  }

  pop() {
    if (this.length === 0) return undefined
    const currentTail = this.tail
    if (this.length === 1) {
      this.head = null
      this.tail = null
      this.length = 0
      return currentTail
    }
    this.tail = this.tail.prev
    this.tail.next = null
    this.length--
    return currentTail
  }

  traverse() {
    let current = this.head
    let str = ' NULL <=> '
    while (current) {
      str = str + current.val + ' <=> '
      current = current.next
    }
    str = str + 'NULL '
    const strlength = 'Length: ' + this.length + ' '
    console.log(strlength.bgRed, str.inverse)
  }
}

const dllist = new DoublyLinkedList()

dllist.push('teste')
dllist.push('second item')
dllist.push('third item')
dllist.push('4item')
dllist.push('555')

dllist.traverse()

dllist.pop()
dllist.traverse()
