># lab 44 - Max Heaps

Create a MaxHeap Prototype with a insertion method.  This heap tracks the maximum value contained in the binary tree, which in this expressed as ordered values in an array. 

The MaxHeap class has two properties and one method.

### Properties

 - heap 

  - this is the array that represents the binary tree.

  - children of a node are ordered by index relationships, (index * 2) + 1 && (index * 2) + 2

  - parents of children have an inverse relationship,  Math.floor((index - 1) / 2);

- max this represents the max value of the heap, ( MaxHeap.heap[0] );


### Methods

- insert

  - inset has an airity of one

  - insert takes a data type of number only

    - throws a type error for anything else
  
  - insert pushes the value to the end of the array 
  
    - inserted values bubble up to the the highest point in its branch based on its value


>## Install

```BASH
    npm i
```

### Dependencies 

- This project has the following dependencies:

```JSON
   "devDependencies": {
    "eslint": "^4.18.1",
    "jest": "^22.4.2"
  }
```

### npm scripts

- The following npm scripts are available:

```JSON
  "scripts": {
    "lint": "eslint .",
    "test": "jest --verbose -i"
  }
```

#### Run the tests!

Normal mode

```BASH
    npm test
```


>## Usage

