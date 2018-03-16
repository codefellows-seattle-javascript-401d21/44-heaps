'use strict';

module.exports = (graph, startNode, endNode) => {
  if(startNode === endNode) throw new Error('__ERROR__ invalid path');
  let queue = [];
  let visitedNodes = new Set();
  let parentMap = new Map(); // contains all paths

  // (1) enqueue startNode into the queue
  // (2) while the queue is not empty do...
  // (3) dequeue one value
  // (4) check if we are at end node
  // (4 cont) either return parentMap OR continue looking
  // (5) take ALL neighbors and put in the queue
  // (6) keep looking

  queue.unshift(startNode); // (1)
  visitedNodes.add(startNode);

  while(queue.length > 0) { // (2) and (6)
    let currentNode = queue.pop(); // (3)

    if(currentNode === endNode) return parentMap; //(4)

    let neighbors = graph.getNeighbors(currentNode);
    for(let neighbor of neighbors) {
      let neighborNode = neighbor.node;

      if(visitedNodes.has(neighborNode)){
        continue;
      } else {
        visitedNodes.add(neighborNode);
      }
      // at current node, next one in path is neighborNode
      parentMap.set(neighborNode, currentNode);
      queue.unshift(neighborNode); // (5)
    }
  }
  return null;
};
