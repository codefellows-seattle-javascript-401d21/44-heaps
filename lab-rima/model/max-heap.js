'use strict';

class MaxHeap{
  constructor(){
    this.data = [];
    this.lastIdx = 0;
  }

  _findParentIdx(currentIdx){
    return Math.floor(Math.abs(currentIdx - 1) / 2);
  }

  insert(val){
    // push a val into data array
    this.data.push(val);
    // start insertion process to insert into a correct position
    let currentIdx = this.lastIdx;
    let parentIdx = this._findParentIdx(currentIdx);

    while(parentIdx !== currentIdx){
      // if parent value is smaller than inserting value, swap value with parent value
      if(this.data[parentIdx] < this.data[currentIdx]){
        let temp = this.data[parentIdx];
        this.data[parentIdx] = this.data[currentIdx];
        this.data[currentIdx] = temp;
      }
      currentIdx = parentIdx;
      parentIdx = this._findParentIdx(currentIdx);
    }
    this.lastIdx++;
    return this.data;
  }

  _findLeftIdx(currentIdx){
    return (2 * currentIdx) + 1;
  }

  _findRightIdx(currentIdx){
    return (2 * currentIdx) + 2;
  }

  findMax(){
    let max = this.data[0];

    // reconstruction
    let temp = this.data[this.lastIdx - 1];
    // release space
    this.data[this.lastIdx - 1] = null;
    this.data[0] = temp;
    // swap value
    let currentIdx = 0;
    let leftIdx = this._findLeftIdx(0);
    let rightIdx = this._findRightIdx(0);

    this.lastIdx--;
    while(leftIdx <= this.lastIdx - 1){
      // if only left child
      if(leftIdx === this.lastIdx - 1){
        // if left child is larger, swap
        if(this.data[leftIdx] > temp){
          let tempLeft = this.data[leftIdx];
          this.data[currentIdx] = tempLeft;
          this.data[leftIdx] = temp;
          currentIdx = leftIdx;
          leftIdx = this._findLeftIdx(currentIdx);
          rightIdx = this._findRightIdx(currentIdx);
        }else{
          break;
        }
      // if both children
      }else{
        // if left child is larger than right child
        if(this.data[leftIdx] > this.data[rightIdx]){
          // if left child is larger than parent, swap
          if(this.data[leftIdx] > temp){
            let tempLeft = this.data[leftIdx];
            this.data[currentIdx] = tempLeft;
            this.data[leftIdx] = temp;
            currentIdx = leftIdx;
            leftIdx = this._findLeftIdx(currentIdx);
            rightIdx = this._findRightIdx(currentIdx);
          }else{
            break;
          }
        // if right child is larger than or equals to left child
        }else{
          // if right child is larger than parent, swap
          if(this.data[rightIdx] > temp){
            let tempRight = this.data[rightIdx];
            this.data[currentIdx] = tempRight;
            this.data[rightIdx] = temp;
            currentIdx = rightIdx;
            leftIdx = this._findLeftIdx(currentIdx);
            rightIdx = this._findRightIdx(currentIdx);
          }else{
            break;
          }
        }
      }
    }
    return max;
  }
}

module.exports = MaxHeap;
