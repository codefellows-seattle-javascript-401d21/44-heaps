'use strict';

module.exports = (graph, startNode, endNode) => {
  if(startNode === endNode) throw new Error('__ERROR__ invalid path');
  let stack = [];
  let visitedNodes = new Set();
  // let parentMap = new Map(); // contains all paths


  stack.push(startNode);
  visitedNodes.add(startNode);

  // (1) add start node to stack
  // (2) check if top of stack === end node
  // (3) if yes, return parent map
  // (4) if no, move on to a neighbor if one exists and push to stack
  // (5) if no neighbor exists, pop top node

};
