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
  removeEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      const v2Atv1 = this.adjacencyList[v1].indexOf(v2)
      const v1Atv2 = this.adjacencyList[v2].indexOf(v1)
      this.adjacencyList[v1].splice(v2Atv1, 1)
      this.adjacencyList[v2].splice(v1Atv2, 1)
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
g.removeEdge('Brazil', 'Tokyo')

console.log(g.adjacencyList)
