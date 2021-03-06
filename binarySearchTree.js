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

console.log(tree)
console.log(tree.find(23))
