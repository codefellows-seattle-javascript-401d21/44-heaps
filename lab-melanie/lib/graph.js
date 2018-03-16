'use strict';

module.exports = class Graph {
  constructor() {
    this._adjacencyList = new Map();
  }

  addNode(node) {
    this._adjacencyList.set(node, []);
  }

  // Makes an edge from start to finish
  addEdge(startNode, endNode, weight = 0) {
    if(!this._adjacencyList.has(startNode) || !this._adjacencyList.has(endNode)) throw new Error('__ERROR__ invalid nodes');

    // getting a reference to the internal array
    let adjacencies  = this._adjacencyList.get(startNode);
    //---------------------------------------------------
    // let endAdjacencies  = this._adjacencyList.get(endNode); // get bi-directional edge
    //---------------------------------------------------

    // option to make an edge class instead
    adjacencies.push({
      node: endNode,
      weight,
    });
    // bi-directional edge
    //---------------------------------------------------
    // endAdjacencies.push({ // bi-directional edge
    //   node: startNode,
    //   weight,
    // });
    //---------------------------------------------------

  }

  getNeighbors(node) {
    if(!this._adjacencyList.has(node)) throw new Error('__ERROR__ invalid nodes');

    return [...this._adjacencyList.get(node)];
  }
};
