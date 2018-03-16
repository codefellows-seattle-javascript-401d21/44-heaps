'use strict';

 module.exports = class Graph { //our graph constructor
  constructor() {
    this.adjacencyList = new Map ();
  }

  addNode(node){ //creating node constructor
    this.adjacencyList.set(node, []) //SET is a hash map that just grabs the keys and not the values
  }

   addEdge(startNode, endNode, weight = 0) {
    if(!this.adjacencyList.has(startNode) || !this.adjacencyList.has(endNode))
      throw new Error('__ERROR__')

      let adjacencyList = this.adjacencyList.get(startNode) //reference to array

      adjacencyList.push({ //
        node: endNode,
        weight, //this is where we would determine the weight of our edges
      })

      //creating bidirectional edges
      //let endAdjacencies.push({
      //  node: startNode,
      //  weight,
      //})
  }

   getNeighbors(node) { //Neighbor/Connections: path length of one, from one node to the next. Direction of edge plays important factor. Neighbor is only qualified if the edge direction is in the direction of the next node(s)
    if(!this.adjacencyList.has(node))
      throw new Error('__ERROR__') //validate existence of neighbor first

     return this.adjacencyList.get(node);//utilize breadth first to traverse through graph because it finds the shortest path
  }
 }

