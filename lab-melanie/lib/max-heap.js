'use strict';

module.exports = class MaxHeap {
  constructor() {
    this.heap = [];
  }

  getParent(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeft(index) {
    return (2 * index) + 1;
  }

  getRight(index) {
    return (2 * index) + 2;
  }

  insert(value) {
    this.heap.push(value);
    this._bubbleUp(this.heap.length - 1);
  }

  _bubbleUp(index) {
    let parent = this.getParent(index);
    if(this.heap[parent] < this.heap[index]) {
      this._swap(parent, index);
      this._bubbleUp(parent);
    }
  }

  _swap(indexA, indexB) {
    let swap = this.heap[indexA];
    this.heap[indexA] = this.heap[indexB];
    this.heap[indexB] = swap;
  }
};
