'use strict';

class MaxHeap{
  constructor(){
    this.data = [];
    this.lastIdx = 0;
  }

  findParentIdx(currentIdx){
    return Math.floor(Math.abs(currentIdx - 1) / 2);
  }

  insert(val){
    // push a val into data array
    this.data.push(val);
    // start insertion process to insert into a correct position
    let currentIdx = this.lastIdx;
    let parentIdx = this.findParentIdx(currentIdx);

    while(parentIdx !== currentIdx){
      // if parent value is smaller than inserting value, switch value with parent value
      if(this.data[parentIdx] < this.data[currentIdx]){
        let temp = this.data[parentIdx];
        this.data[parentIdx] = this.data[currentIdx];
        this.data[currentIdx] = temp;
        currentIdx = parentIdx;
        parentIdx = this.findParentIdx(currentIdx);
      }
    }
    this.lastIdx++;
    return this.data;
  }
}

module.exports = MaxHeap;
