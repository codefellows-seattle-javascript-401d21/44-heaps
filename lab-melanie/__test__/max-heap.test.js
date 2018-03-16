'use strict';

const MaxHeap = require('../lib/max-heap');
require('jest');

describe('Max Heap', function() {
  describe('Insert method', () => {
    let mh = new MaxHeap();
    it('should insert a node into the heap', () => {
      expect(mh.heap.length).toEqual(0);
      mh.insert(5);
      expect(mh.heap.length).toEqual(1);
    });
    it('should bubble up a value that is higher than it\'s parent', () => {
      mh.insert(10);
      expect(mh.heap[0]).toEqual(10);
      expect(mh.heap[1]).toEqual(5);
    });
  });
  describe('Get Parent', () => {
    let mh = new MaxHeap();
    mh.insert(10);
    mh.insert(9);
    mh.insert(5);
    mh.insert(6);
    mh.insert(7);
    mh.insert(8);
    it('should return the parent index', () => {
      expect(mh.getParent(5)).toEqual(2);
      expect(mh.getParent(2)).toEqual(0);
    });
  });
  describe('Get Right', () => {
    let mh = new MaxHeap();
    mh.insert(10);
    mh.insert(9);
    mh.insert(5);
    mh.insert(6);
    mh.insert(7);
    mh.insert(8);
    it('should return the right child index', () => {
      expect(mh.getRight(0)).toEqual(2);
      expect(mh.getRight(1)).toEqual(4);
    });
  });
  describe('Get Left', () => {
    let mh = new MaxHeap();
    mh.insert(10);
    mh.insert(9);
    mh.insert(5);
    mh.insert(6);
    mh.insert(7);
    mh.insert(8);
    it('should return the left child index', () => {
      expect(mh.getLeft(0)).toEqual(1);
      expect(mh.getLeft(1)).toEqual(3);
    });
  });
});
