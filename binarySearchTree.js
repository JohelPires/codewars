import Queue from './queueClass.js'

class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(val) {
    const newNode = new Node(val)
    if (!this.root) {
      this.root = newNode
      return this
    } else {
      let current = this.root
      while (true) {
        if (val === current.val) return undefined
        if (val < current.val) {
          if (!current.left) {
            current.left = newNode
            return this
          } else {
            current = current.left
          }
        } else if (val > current.val) {
          if (!current.right) {
            current.right = newNode
            return this
          } else {
            current = current.right
          }
        }
      }
    }
  }

  find(val) {
    let current = this.root
    while (current) {
      if (val === current.val) return true
      if (val < current.val) {
        current = current.left
      } else if (val > current.val) {
        current = current.right
      }
    }
    return false
  }

  // traverse using Breadth-First Search algorithm
  traverse() {
    const q = []
    const data = []
    q.push(this.root)
    while (q.length) {
      const dequeued = q.pop()
      // console.log('dequeued: ' + dequeued.val)
      data.push(dequeued.val)
      if (dequeued.left) q.push(dequeued.left)
      if (dequeued.right) q.push(dequeued.right)
      // console.log(q)
    }
    return data
  }

  DFS() {
    const data = []
    let current = this.root

    function traverse(node) {
      data.push(node.val)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }

    traverse(current)
    return data
  }
  DFS_PO() {
    const data = []
    let current = this.root

    function traverse(node) {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      data.push(node.val)
    }

    traverse(current)
    return data
  }
  DFSInOrder() {
    const data = []
    let current = this.root

    function traverse(node) {
      if (node.left) traverse(node.left)
      data.push(node.val)
      if (node.right) traverse(node.right)
    }

    traverse(current)
    return data
  }
}

const tree = new BinarySearchTree()

tree.insert(5)
tree.insert(9)
tree.insert(15)
tree.insert(20)
tree.insert(22)
tree.insert(19)
tree.insert(13)
tree.insert(2)

// console.log(tree)
// console.log(tree.find(23))

console.log(tree.DFS())
console.log(tree.DFS_PO())
console.log(tree.DFSInOrder())
