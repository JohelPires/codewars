class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(name) {
    this.adjacencyList[name] = []
  }
}

const g = new Graph()

g.addVertex('Tokyo')
g.addVertex('New York')
g.addVertex('Guatemala')

console.log(g.adjacencyList)
