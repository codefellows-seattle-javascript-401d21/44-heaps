'use strict';

const SLL = require('./sll.js');

module.exports = 

class HashTable {
  constructor(size=1024){
    this.size = size;
    this.buckets = [];
    this.bucket = null;  
  }

  hash(val){
    this.isTypeError(val);
    let hashBase = val;
    if(typeof val === 'string'){
      hashBase = val.split('').reduce((acc, cur) => acc + cur.charCodeAt(0), 0);
    } 
    if (hashBase === 0) return hashBase;
    return Math.floor(this.size % hashBase);
  }

  set(indexValue, value){
    if(indexValue === undefined || indexValue === null) return new Error('Type Error: expecting string or number');
    this.isTypeError(indexValue);
   
    if (!value) value = indexValue;
    let hashIndex = this.hash(indexValue);
    this.bucket = this.buckets[hashIndex];

    if (!this.bucket){
      if (this.buckets.length >= this.size) throw new Error('Error:  Number of allowable hash indexes exceeded');
      this.bucket = this.buckets[hashIndex] = new SLL();
    }
    this.insertBucketValue(indexValue, value);
    //Big-O since this is a linked list that does not allow dupes
    // the list must be iterated over
    //Big-0 best: O(1) worst: O(n) n = number of nodes in list
  }

  get(indexValue){ //Big-O for finding the index: O(1)
    this.isTypeError(indexValue);
    this.bucket = this.buckets[this.hash(indexValue)];
    if (!this.bucket) return null;
    return this.getBucketValue(indexValue);
    //Big-O finding value: since this is a linked list, Big-0 best: O(1) worst: O(n) n = number of nodes in list
  }

  remove(indexValue){ //Big-O for finding the index: O(1)
    this.isTypeError(indexValue);
    this.bucket = this.buckets[this.hash(indexValue)];
    if(!this.bucket) return null;
    let value = this.deleteBucketValue(indexValue);
    if (!this.bucket) delete this.buckets[this.hash(indexValue)];
    return value;
    //Big-O finding value: since this is a linked list, Big-0 best: O(1) worst: O(n) n = number of nodes in list
  }

  isTypeError(arg){
    if (typeof arg !== 'string' && typeof arg !== 'number') throw new Error('Type Error: expecting string or number');
  }

  insertBucketValue(indexVal, val){
    let node = this.bucket.head;
    while(node){
      if( node.value.indexValue === indexVal ){
        return node.value.value = val;
      } 
      node = node.next;
    }
    this.bucket.insertHead({indexValue: indexVal, value: val});
  }


  getBucketValue(indexVal){
    let node = this.bucket.head;
    while(node){
      if( node.value.indexValue === indexVal ){
        return node.value.value;
      } 
      node = node.next;
    }
    return null;
  }

  deleteBucketValue(indexVal){
    let node = this.bucket.head;
    let prev_node = null;
    while(node){
      if( node.value.indexValue === indexVal ){
        let nodeValue = node.value.value;
        prev_node ? prev_node.next = node.next : this.bucket = null;
        return nodeValue;
      } 
      prev_node = node;
      node = node.next;
    }
    return null;
  }
};

