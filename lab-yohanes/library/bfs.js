import { start } from "repl";

'use strict';

module.exports = (graph, startNode, endNode) => {
  let queue = [];
  let visitedNodes = new Set(); //gonna be like a hash that only has keys
  let parentMap = new Map()

  //enqueue startNode into queue
  //while queue is not empty...
  //dequeue one value
  //check if we are at endNode... 4
  //either return parentMap or continue looking...
  //take ALL the neighbors and put them in the queue
  //keep looking...

  queue.unshift(startNode); //(1)
  visitedNodes.add(startNode);

  while(queue.length > 0) { //(2)
    let currentNode = queue.pop() //(3)
    if(currentNode === goalNode)
      return parentMap //(4) will return all the mapped through nodes

      let neighbors = graph.getNeighbors(currentNode);
      for(let neighbor of neighbor) { //same as neighbor[neighbor] 
        let neighborNode = neighbor.node //so we can just grab the node and not the weight. 

        if(visitNodes.has(neighborNode))
          continue;
        else
          visitedNodes.add(neighborNode) //adds nodes to the ones that dont have neighbors

          //im at current node, and the next one in the path is neighborNode
          parentMap.set(neighborNode, currentNode) //
          queue.unshift(neighborNode)
      }
  }
  return null;//when we reach end of graph unless we had a looping node which we dont want in this case
}

