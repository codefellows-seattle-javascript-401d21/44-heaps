
The purpose of this lab was to get acquainted with heaps - heaps are an efficient method of data storage if you want to immediately retrieve the minimum or the maximum in a data set. First off, based on lecture, we got a basic prototype. The Challenge was to create a MAX heap prototype.

With this code you are also able to create an insertion, for example:


```
      let maxHeap = new MaxHeap();
            maxHeap.insert(3);
            maxHeap.insert(2);
            maxHeap.insert(3);
            maxHeap.insert(4);

            data can be expected to equal [4, 3, 2, 3])

```

With the max heap prototype, the new instantiation will be an object with two properties:

```

.data - an array for storing data
.lastIndex - an index for inserting a new value

```


Max-Heap
Create a MaxHeap Prototype using lecture code as a starting point.

Insertion Method
Implement a depth first insertion:

Tests
Write two unit tests for your prototype.
Write two unit tests for your depth-first insertion.
