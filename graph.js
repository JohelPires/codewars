class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }
  addEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1].push(v2)
      this.adjacencyList[v2].push(v1)
    }
  }
}

const g = new Graph()

g.addVertex('Tokyo')
g.addVertex('Brazil')
g.addVertex('New York')
g.addVertex('Guatemala')
g.addVertex('France')
g.addVertex('Dubai')

g.addEdge('Brazil', 'Dubai')
g.addEdge('Brazil', 'Tokyo')

console.log(g.adjacencyList)
