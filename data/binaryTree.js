class BinaryNode {
  constructor(value, leftNode, rightNode) {
    this.value = value;
    this.leftNode = leftNode;
    this.rightNode = rightNode;
  }

  getNodes() {
    return [this.leftNode, this.rightNode];
  }
}

const root = new BinaryNode(19,
  new BinaryNode(10,
    new BinaryNode(9,
      new BinaryNode(3),
      new BinaryNode(2))),
  new BinaryNode(10,
    new BinaryNode(9),
    new BinaryNode(9,
      new BinaryNode(1))));

module.exports = {
  BinaryNode,
  root,
};
