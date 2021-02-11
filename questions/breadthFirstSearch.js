const { root } = require('../data/binaryTree');

const logBreadthFirst = (rootNode) => {
  const queue = [];
  queue.push({ node: rootNode, level: 0 });
  const leveledNodes = [];
  while (queue.length) {
    const { node, level } = queue.shift();
    if (node.leftNode) {
      queue.push({ node: node.leftNode, level: level + 1 });
    }

    if (node.rightNode) {
      queue.push({ node: node.rightNode, level: level + 1 });
    }

    leveledNodes.push({ value: node.value, level });
  }

  console.log(leveledNodes);
};

logBreadthFirst(root);
