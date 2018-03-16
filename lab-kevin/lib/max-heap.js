'use strict';

module.exports = class {
  constructor(){
    this.heap = [];
    this.max = null;
  }

  insert(value){
    //validate input
    if (typeof value !== 'number') throw Error('Type error: expecting number');
    //push the value to the array
    this.heap.push(value);
    // if the value is the only item in the array then you are done
    if (this.heap.length === 1) return this.max = value;
    //set the current the index of the value
    let insertIndex = (this.heap.length - 1);
    //calculate the index of the parent
    let parentIndex = Math.floor((insertIndex - 1) / 2);
    //compare the value to its parent
    //if it is greater then it's parent, then swap the two values
    while(value >= this.heap[parentIndex]){
      //since the value is grater than the parent
      //move the value of the parent to the end of the array
      this.heap[insertIndex] = this.heap[parentIndex];
      //move the value to the parents index
      this.heap[parentIndex] = value;
      //reset the insert index 
      insertIndex = parentIndex;
      //reset the parent index
      parentIndex = Math.floor((parentIndex - 1) / 2);
    }
    //set the max value;
    this.max = this.heap[0];
    return;
  }
};