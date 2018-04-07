'use strict'

class MaxHeap {
    constructor() {
        this.data = []
        this.lastHeapIndex = 0
    }
    _findParentVal(heapIndexCurrentVal) {
        return Math.floor(Math.abs(heapIndexCurrentVal - 1) / 2)
    }
    insert(val) {
        // push a value into our array of data
        this.data.push(val)
        //insert the data in the correct position
        let heapIndexCurrentVal = this.lastHeapIndex
        let parentIndex = this._findParentVal(heapIndexCurrentVal)
        while (parentIndex !== heapIndexCurrentVal) {
            // swap value with parent value if the parent value is smaller than inserting value.
            if (this.data[parentIndex] < this.data[heapIndexCurrentVal]) {
                let temporaryValue = this.data[parentIndex]
                this.data[parentIndex] = this.data[heapIndexCurrentVal]
                this.data[heapIndexCurrentVal] = temporaryValue
            }
            heapIndexCurrentVal = parentIndex
            parentIndex = this._findParentVal(heapIndexCurrentVal)
        }
        // increment last index by one
        this.lastHeapIndex++
        return this.data
    }

}

module.exports = MaxHeap