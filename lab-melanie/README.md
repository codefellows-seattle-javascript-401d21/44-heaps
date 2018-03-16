# 44 Heaps and Graphs

This repository contains two data structures, one for `Max Heap` and one for `Graph`.

* `Max Heap` contains methods:
  * `getParent` - finds index value of a given index
  * `getRight` - finds index value of right child node (if it exists)
  * `getLeft` - finds index value of left child node (if it exists)
  * `insert` - adds a value to the end of the heap and will bubble up until its parent value is greater that its own.

* `Graph` contains methods:
  * `getNeighbor` - finds all connected nodes of a single given node
  * `addNode` - adds a node to the graph
  * `addEdge` - connects a node to another specified node

`Graph` also has a breadth first search and a depth first search to find a path from one given node to another.
