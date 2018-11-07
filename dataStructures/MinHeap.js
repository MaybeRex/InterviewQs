/* eslint class-methods-use-this: 0 */
class Heap {
  constructor() {
    this.size = 0;
    this.items = [];
  }

  getLeftChildIndex(parentIndex) { return 2 * parentIndex + 1; }

  getRightChildIndex(parentIndex) { return 2 * parentIndex + 2; }

  getParentIndex(childIndex) { return (childIndex - 1) / 2; }

  hasLeftChild(index) { return this.getLeftChildIndex(index) < this.size; }

  hasRightChild(index) { return this.getRightChildIndex(index) < this.size; }

  hasParent(index) { return this.getParentIndex(index) >= 0; }

  leftChild(index) { return this.items[this.getLeftChildIndex(index)]; }

  rightChild(index) { return this.items[this.getRightChildIndex(index)]; }

  parent(index) { return this.items[this.getParentIndex(index)]; }

  swap(firstIndex, secondIndex) {
    const temp = this.items[firstIndex];
    this.items[firstIndex] = this.items[secondIndex];
    this.items[secondIndex] = temp;
  }

  peek() {
    if (this.size === 0) {
      throw new Error('heap is emty');
    }

    return this.items[0];
  }

  poll() {
    if (this.size === 0) {
      throw new Error('heap is emty');
    }

    // get first item
    const item = this.items[0];

    // get the bottom of the heap and replace the first element
    this.items[0] = this.items[this.size - 1];

    // diminish the size
    this.size -= 1;

    // bubble down the top and reveal the new smallest item
    this.heapifyDown();
    return item;
  }

  add(item) {
    // add to the end of the heap
    this.items.push(item);

    // increase the size of the heap
    this.size += 1;

    // bubble up the new value if necessary
    this.heapifyUp();
  }

  heapifyUp() {
    // index which needs to be bubbled up
    let index = this.size - 1;

    // while the index has a parent and the parent is bugger than the current index
    while (this.hasParent(index) && (this.parent(index) > this.items[index])) {
      const parentIndex = this.getParentIndex(index);

      // swap smaller and bigger
      this.swap(parentIndex, index);

      // carry the index so we keep bubblig up
      index = parentIndex;
    }
  }

  heapifyDown() {
    let index = 0;

    // while the index has children, keep walking down and fixing along the way
    while (this.hasLeftChild(index)) {
      // if children exist, a left child will always be defined
      let smallerChildIndex = this.getLeftChildIndex(index);

      // if there is another child, and the other child is even smaller than the left child,
      // use that instead
      if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {
        smallerChildIndex = this.getRightChildIndex(index);
      }

      // if current index is smaller than the children, then we're all good and we can exit
      if (this.items[index] < this.items[smallerChildIndex]) {
        break;
      }

      // swap w/ the smaller child and keep going down
      this.swap(index, smallerChildIndex);
      index = smallerChildIndex;
    }
  }
}

const testHeap = new Heap();

testHeap.add(20);
testHeap.add(17);
testHeap.add(15);
testHeap.add(10);
testHeap.add(100);
testHeap.add(100);
testHeap.add(100);
testHeap.add(0);

console.log(testHeap.poll());
console.log(testHeap.poll());
console.log(testHeap.poll());
console.log(testHeap.poll());
console.log(testHeap.poll());
console.log(testHeap.poll());
console.log(testHeap.poll());
console.log(testHeap.poll());

module.exports = Heap;
