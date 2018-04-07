'use strict';

const MaxHeap = require('../models/maxHeap');

describe('test maxHeap', () => {
    describe('insertion method', () => {
        test('should insert value into the desired position', () => {
            let maximumHeap = new MaxHeap();
            maximumHeap.insert(1.178)
            maximumHeap.insert(1.278)
            maximumHeap.insert(1.378)
            maximumHeap.insert(1.478)
            let testResult = maximumHeap.insert(1.578)
            expect(testResult).toBeInstanceOf(Array);
            expect(testResult).toEqual([1.578, 1.478, 1.278, 1.178, 1.378])
        });
        test('increment lastIndex by one', () => {
            let maximumHeap = new MaxHeap();
            maximumHeap.insert(6)
            maximumHeap.insert(5)
            maximumHeap.insert(6)
            maximumHeap.insert(7)
            let testResult = maximumHeap.insert(8)
            expect(testResult).toBeInstanceOf(Array);
            expect(testResult).toEqual([8, 7, 6, 5, 6])
            expect(testResult[0]).toBe(8)
            expect(testResult[4]).toBe(6)
            expect(maximumHeap.lastIndex).toEqual(5)
        });
        test('should return an ordered data array', () => {
            let maximumHeap = new MaxHeap()
            maximumHeap.insert(3)
            maximumHeap.insert(4)
            maximumHeap.insert(5)
            maximumHeap.insert(-2)
            let testResult = maximumHeap.insert(-5)
            expect(testResult).toBeInstanceOf(Array);
            expect(testResult[0]).toBe(5)
            expect(testResult[4]).toBe(-5)
            expect(testResult).toEqual([5, 3, 4, -2, -5])
        });
    });

    describe('testing the constructor', () => {
        test('instantiate a new max heap - should have an empty data array and a lastIndex of 0', () => {
            let maximumHeap = new MaxHeap()
            expect(maximumHeap.data).toEqual([])
            expect(maximumHeap.data).toBeInstanceOf(Array);
            expect(maximumHeap.lastIndex).toEqual(0)
        });
    });


});