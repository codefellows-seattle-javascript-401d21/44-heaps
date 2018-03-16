#PART 1
Heaps: finding the greatest and smallest value in a binary tree
Breadth first rewriting graph into an array
Big O(n)

#Node terminology
K is the root
Left: 2k + 1
Right: 2k + 2
Big O(n)

in a binary tree, each branch is 4 bytes of memory and the leaves them self are an additional 4 bytes each. This is why people re-iterate the values of a tree into an array
Big O(n)

#Part 2 Graphs
branches/links/edges = all mean the same thing but edges is the more computer science term
Graphs have no head root. It starts and ends anywhere depending on the situation or end goal of using the database
Graphs would most likely be used for friends requests, neuro-networking friends requests
Almost every computer network is built off graphs

findPath(start, end) is how we would define the start and end node as arguments and let the computer graph the most efficient route between the nodes

#Graph Terminology
Directed:
Indirect:
Loop: continuous(infinite) looping between nodes
Node Vertex:
Path: the nodes between (start, end) in findPath(start, end)
Cycle: is a path that starts and ends in the same node
Connected Graph: creating branch/link/edge between one node to the other on 2 separate graphs
Neighbor/Connections: path length of one, from one node to the next. Direction of edge plays important factor. Neighbor is only qualified if the edge direction is in the direction of the next node(s)
Simple Graph: No weights(because the standard edge/branch has a wight of 4 bytes each) no direction, no loops, no multiple edges

A tree is a prime example of a simple graph except that it has direction

#LAB
we will use a hash map to grab a node and iterate through all the connected nodes into a linked list
SET is a hash map that just grabs the keys and not the values

#Part 3
rewatch video to fix code confusion
re-watch for tests
re-watch for add nodes and then ading edges to create our graph specifically how we want the nodes to connect