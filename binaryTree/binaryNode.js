/**
 * A binary tree is composed of nodes
 * Each node contains a value, a left pointer and a right pointer
 * @type {[type]}
 */
class Node {
  constructor(data) {
    if(!data) {
      return new Error('We need data');
    }

    if(typeof data !== 'object') {
      return new Error('Data must be an object');
    }

    if(typeof data.value !== 'number') {
      return new Error('Data value must be a number');
    }

    this.value = data.value;
    this.left = data.left || null;
    this.right = data.right || null;
  }
}

module.exports = Node;
