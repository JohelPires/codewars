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

  unshift(val) {
    if (this.length === 0) return push(val)
    const newNode = new Node(val)
    const oldHead = this.head
    this.head = newNode
    this.head.next = oldHead
    oldHead.prev = this.head
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

  shift() {
    if (this.length === 0) return undefined
    const currentHead = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
      this.length = 0
      return currentHead
    }
    this.head = this.head.next
    this.head.prev = null
    this.length--
    return currentHead
  }

  get(idx) {
    if (idx > this.length - 1 || idx < 0) return null
    // if (this.length === 1 || idx === this.length - 1) return this.tail
    let result
    if (this.length / 2 > idx) {
      //iterate from the beggining
      result = this.head
      for (let i = 1; i <= idx; i++) {
        result = result.next
      }
    } else {
      //iterate from the end
      result = this.tail
      for (let i = this.length - 2; i >= idx; i--) {
        result = result.prev
      }
    }
    return result
  }

  set(val, idx) {
    if (idx > this.length - 1 || idx < 0) return null
    let oldNode
    if (this.length / 2 > idx) {
      oldNode = this.head
      for (let i = 1; i <= idx; i++) {
        oldNode = oldNode.next
      }
    } else {
      oldNode = this.tail
      for (let i = this.length - 2; i >= idx; i--) {
        oldNode = oldNode.prev
      }
    }
    oldNode.val = val
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

dllist.shift()
dllist.unshift('new First')
dllist.set('new Second', 0)
dllist.traverse()
console.log(dllist.get(0).val)
