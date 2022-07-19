function PriorityQueue() {
  this.collection = []
  this.printCollection = function () {
    console.log(this.collection)
  }
  // enqueue items in the format ['item', x]. X = priority number

  //[ ['a', 2], ['b', 2] ]

  this.enqueue = function (item) {
    if (
      this.collection.length &&
      this.collection[this.collection.length - 1][1] > item[1]
    ) {
      for (let i = 0; i < this.collection.length; i++) {
        if (item[1] < this.collection[i][1]) {
          this.collection.splice(i, 0, item)
          break
        }
      }
    } else {
      this.collection.push(item)
    }
  }
  this.dequeue = function () {
    return this.collection.shift()[0]
  }
  this.size = function () {
    return this.collection.length
  }
  this.front = function () {
    return this.collection[0][0]
  }
  this.isEmpty = function () {
    return this.collection.length === 0
  }
}

teste = new PriorityQueue()

teste.enqueue(['teste', 2])
teste.enqueue(['a', 2])
teste.enqueue(['t', 2])
teste.enqueue(['c', 2])
teste.enqueue(['x', 3])
teste.enqueue(['z', 1])
teste.enqueue(['b', 1])
teste.enqueue(['sdfasb', 4])
teste.enqueue(['asdfb', 7])
teste.enqueue(['badasdf', 5])
teste.enqueue(['qwerb', 1])

teste.printCollection()
console.log(teste.front())
console.log(teste.dequeue())
teste.printCollection()
