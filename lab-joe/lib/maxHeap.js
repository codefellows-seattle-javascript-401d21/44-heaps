'use strict'

class MaxHeap {
    constructor() {
        this.data = []
        this.lastIndex = 0
    }
    _findParent(currentIndex) {
        return Math.floor(Math.abs(currentIndex - 1) / 2)
    }
    insert(val) {
        // push a value into our array of data
        this.data.push(val)
        //insert the data in the correct position
        let currentIndex = this.lastIndex
        let parentIndex = this._findParent(currentIndex)
        while (parentIndex !== currentIndex) {
            // swap value with parent value under the condition the parent value is smaller than inserting value.
            if (this.data[parentIndex] < this.data[currentIndex]) {

                let temp = this.data[parentIndex]
                this.data[parentIndex] = this.data[currentIndex]
                this.data[currentIndex] = temp
            }
            currentIndex = parentIndex
            parentIndex = this._findParent(currentIndex)
        }
        // increment last index by one
        this.lastIndex++
        return this.data
    }

}

module.exports = MaxHeap