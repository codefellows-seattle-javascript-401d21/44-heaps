'use strict';

const MaxHeap = require('../lib/maxHeap');

describe('test maxHeap', () => {
    describe('insertion method', () => {
        test('should insert value into the desired position', () => {
            let maximumHeap = new MaxHeap();
            maximumHeap.insert(1)
            maximumHeap.insert(2)
            maximumHeap.insert(3)
            maximumHeap.insert(4)
            let testResult = maximumHeap.insert(5)

            expect(testResult).toEqual([5, 4, 2, 1, 3])
        });
        test('increment lastIndex by one', () => {
            let maximumHeap = new MaxHeap();
            maximumHeap.insert(3)
            maximumHeap.insert(2)
            maximumHeap.insert(3)
            maximumHeap.insert(4)
            let testResult = maximumHeap.insert(5)

            expect(testResult).toEqual([5, 4, 3, 2, 3])
            expect(maximumHeap.lastIndex).toEqual(5)
        });
        test('should return an ordered data array', () => {
            let maximumHeap = new MaxHeap()
            maximumHeap.insert(1)
            maximumHeap.insert(2)
            maximumHeap.insert(3)
            maximumHeap.insert(-4)
            let testResult = maximumHeap.insert(-5)
            expect(testResult).toEqual([3, 1, 2, -4, -5])
        });
    });

    describe('testing the constructor', () => {
        test('instantiate a new max heap - should have an empty data array and a lastIndex of 0', () => {
            let maximumHeap = new MaxHeap()
            expect(maximumHeap.data).toEqual([])
            expect(maximumHeap.lastIndex).toEqual(0)
        });
    });


});