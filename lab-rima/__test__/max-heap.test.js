'use strict';

const MaxHeap = require('../model/max-heap');

describe('MaxHeap module', () => {

  describe('constructor', () => {
    test('should create an instance of MaxHeap with empty data array and lastIdx 0', () => {
      let maxHeap = new MaxHeap();

      expect(maxHeap.data).toEqual([]);
      expect(maxHeap.lastIdx).toEqual(0);
    });
  });

  describe('insert method', () => {
    test('should insert value in a correct position', () => {
      let maxHeap = new MaxHeap();
      maxHeap.insert(1);
      maxHeap.insert(2);
      maxHeap.insert(3);
      maxHeap.insert(4);
      let data = maxHeap.insert(5);

      expect(data).toEqual([5,4,2,1,3]);
    });
    test('should increment lastIdx by one', () => {
      let maxHeap = new MaxHeap();
      maxHeap.insert(3);
      maxHeap.insert(2);
      maxHeap.insert(3);
      maxHeap.insert(4);
      let data = maxHeap.insert(5);
      
      expect(data).toEqual([5,4,3,2,3]);
      expect(maxHeap.lastIdx).toEqual(5);
    });
    test('should return data array', () => {
      let maxHeap = new MaxHeap();
      maxHeap.insert(1);
      maxHeap.insert(2);
      maxHeap.insert(3);
      maxHeap.insert(-4);
      let data = maxHeap.insert(-5);
      
      expect(data).toEqual([3,1,2,-4,-5]);
      expect(Array.isArray(data)).toBe(true);
    });
  });

  describe('findMax method', () => {
    test('should return correct value', () => {
      let maxHeap = new MaxHeap();
      maxHeap.insert(1);
      maxHeap.insert(2);
      maxHeap.insert(3);
      maxHeap.insert(4);
      maxHeap.insert(5);
      let max = maxHeap.findMax();

      expect(max).toEqual(5);
      expect(maxHeap.data).toEqual([4,3,2,1,null]);
    });
    test('should restructure MaxHeap correctly', () => {
      let maxHeap = new MaxHeap();
      maxHeap.insert(-1);
      maxHeap.insert(2);
      maxHeap.insert(30);
      maxHeap.insert(4.5);
      maxHeap.insert(5);
      let max = maxHeap.findMax();

      expect(max).toEqual(30);
      expect(maxHeap.data).toEqual([5,4.5,2,-1,null]);
    });
  });
});
