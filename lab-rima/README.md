## Max Heap class
##### constructor
```
let maxheap = new MaxHeap();
```
New instance will have two properties:
* maxheap.data: empty array to store data
* maxheap.lastIdx: index to insert new value
##### insert
```
maxheap.insert(val);
```
This inserts val to maxheap in a collect position. It keeps a condition of maxheap, which means max value in maxheap is always at index 0 of maxheap.data.
##### findMax
```
maxheap.findMax();
```
This returns max value in maxheap and removes it. It keeps a condition of maxheap, which means max value in maxheap is always at index 0 of maxheap.data.
