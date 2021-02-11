export class MinHeap {
  constructor() {
    this.heap = [];
  }

  swap(firstIndex, secondIndex) {
    const temp = this.heap[firstIndex];
    this.heap[firstIndex] = this.heap[secondIndex];
    this.heap[secondIndex] = temp;
  }

  getMin() {
    return this.heap[0];
  }

  insert(element) {
    this.heap.push(element);

    // first element is free (;
    if (this.heap.length === 1) {
      return;
    }

    let current = this.heap.length - 1;
    // while we are not in the top node, && the parent node is bigger than current, keep going
    // PS, Math.floor(current / 2) is the index of the parent node apparently lol, how nice
    while (current > 1 && this.heap[Math.floor(current / 2)] > this.heap[current]) {
      this.swap(this.heap[current], this.heap[Math.floor(current / 2)]);
      current = Math.floor(current / 2);
    }
  }

  remove() {
    const smallest = this.heap[0];

    if (!this.heap.length) {
      return null;
    }

    if (this.heap.length === 1) {
      return this.heap.splice(0, 1);
    }

    // when we remove the top element, put the last element at the top to begin with
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.splice(this.heap.length - 1, 1);

    const current = 0;
    const parentIndex = Math.floor(current / 2);
    const leftChildIndex = 2 * parentIndex + 1;
    const rightChildIndex = 2 * parentIndex + 2;

    while (
      this.heap[leftChildIndex]
      && (this.heap[current] > this.heap[leftChildIndex] || this.heap[current] > this.heap[rightChildIndex])) {

        if (this.heap[leftChildIndex] )

    }
  }
}

export class MaxHeap {
  constructor(selector) {
    this.items = [];
    this.selector = selector;
  }

  push() {

  }

  pop() {}
}
