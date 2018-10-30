class Stack {
  constructor(initialItems = []) {
    this.items = [...initialItems];
    this.length = initialItems.length;
  }

  add(item) {
    this.items.push(item);
    this.length += 1;
  }

  next() {
    this.length -= 1;
    return this.items.pop();
  }

  peek() {
    const first = this.items[this.length - 1];
    return first;
  }
}

module.exports = Stack;
