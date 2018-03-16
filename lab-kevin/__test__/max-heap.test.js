'use strict';

const MaxHeap = require('../index');

function isMaxHeap(maxheap){
  if (maxheap.max != maxheap.heap[0]) return false; 
  return maxheap.heap.every((val, i, heap) => 
    heap[i] >= (heap[(i * 2) + 1] || 0) &&  heap[i] >= (heap[(i * 2) + 2 ] || 0)
  );
}

describe(' Max-Heap test', function(){


  describe('Module exists', () => {
    it('Should exist', () => {
      expect(MaxHeap).toBeDefined();
    });

    it('Class exists', () => {
      expect(new MaxHeap()).toBeInstanceOf(Object);
    });
  });

  describe('Valid input', function(){

    describe('Max heap constructor', () => {
      it('Should create an max heap with an array and max value', () =>{ 
        expect(new MaxHeap().heap).toBeInstanceOf(Array);
        expect(new MaxHeap().heap.length).toEqual(0);
      });

      it('Should create an max heap with an array and max value', () =>{ 
        expect(new MaxHeap().max).toBeNull();
      });
      
    });

    describe('Max heap insert', () => {
      it('Should should be a function', () =>{ 
        expect(new MaxHeap().insert).toBeInstanceOf(Function);
      });

      it('Should have a max value and 0 index value', () =>{ 
        let heap = new MaxHeap();
        heap.insert(21);
        expect(heap.max).toEqual(21);
        expect(heap.heap[0]).toEqual(21);
      });

      it('Should swap 11 for 15', () =>{ 
        let heap = new MaxHeap();
        heap.heap.push(...[21, 17, 13, 11, 9, 7, 5]);
        heap.insert(15);
        expect(heap.max).toEqual(21);
        expect(heap.heap[3]).toEqual(15);
        expect(heap.heap[heap.heap.length - 1]).toEqual(11);
        expect(isMaxHeap(heap)).toBe(true);
      });

      it('Should build a heap correctly using insert', () => { 
        let heap = new MaxHeap();
        [1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(val => heap.insert(val));
        expect(heap.max).toEqual(9);
        expect(isMaxHeap(heap)).toBe(true);
      });

    });

  });

  describe('Invalid input', () => {
  
    describe('Max heap constructor', () => {
      it('Should not create a heap using the constructors', () =>{ 
        let heap = new MaxHeap(21);
        expect(heap.max).toBeNull();
        expect(heap.heap.length).toBe(0);
      });
    });

    describe('Max heap should not insert non numbers', () => {
      it('Should throw an error when attempting to insert a value that is not a number', () =>{ 
        let heap = new MaxHeap(21);
        expect(() => heap.insert()).toThrow();
        expect(() => heap.insert('extemporaneous')).toThrow();
      });
    });
  });

});