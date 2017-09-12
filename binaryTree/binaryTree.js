/*
  This is an implementation of a binary search tree in javascript
  considetations:
  No duplicate entries will be allowed
 */

const Node = require('./binaryNode');

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /**
   * This adds a node into the binary tree
   * @param  {Number} value Number (or string ?) to be added to tree
   */
  add(value) {
    if(typeof value !== 'number') {
      return new Error('Only numbers may be added to the tree!');
    }

    // if the tree is empty, add a new node to it
    if(!this.root) {
      this.root = new Node({value: value});
      return;
    }

    let currentNode = this.root;
    const newNode = new Node({value: value});

    // this loop will exit when the currentNode is reassigned to be the left
    // or right of the new node, calling break
    while(currentNode !== null) {

      // go left
      if(value < currentNode.value) {
        if(currentNode.left === null) {
          // assing new node to the current node's left
          // and done
          currentNode.left = newNode;
          break;
        } else {
          // assign the left of the current node to itself
          // and start over
          currentNode = currentNode.left;
          continue;
        }
      }

      // go right
      if(value > currentNode.value) {
        if(currentNode.right === null) {
          currentNode.right = newNode;
          break;
        } else {
          currentNode = currentNode.right;
          continue;
        }
      }

      if(value === currentNode.value) {
        return new Error('No duplicates allowed');
      }
    }
  }

  hasValueDepth(value) {
    if(typeof value !== 'number') {
      return new Error('Value must be a number');
    }

    let pivotNodes = [];
    let currrentNode = this.root;

    // dig far left looking for the value
    while (currrentNode.left !== null) {
      if(this.root.value === value) {
        return true;
      }

      // we save these for later in order to traverse back up
      if(currrentNode.left !== null && currrentNode.right !== null) {
        pivotNodes.push(currrentNode);
      }

      // keep it going
      currrentNode = currrentNode.left;
    }

    return false;
  }

  hasValueBreadth() {

  }
}
