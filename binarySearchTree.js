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
    }
    let current = this.root
    let thereIsValue = this.root
    while (thereIsValue) {
      if (val > current.val) {
        if (current.right) {
          thereIsValue = thereIsValue.right
        } else {
          current.right = newNode
          thereIsValue = null
          return this
        }
      } else if (val < current.val) {
        if (current.left) {
          thereIsValue = thereIsValue.left
        } else {
          current.left = newNode
          thereIsValue = null
          return this
        }
      }
    }
  }
}

const tree = new BinarySearchTree()

tree.insert(5)
tree.insert(9)
tree.insert(7)

console.log(tree)
