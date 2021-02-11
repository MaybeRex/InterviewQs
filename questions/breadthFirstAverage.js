const { root } = require('../data/binaryTree');

const breadthFirstAverage = (rootNode) => {
  const queue = [{ node: rootNode, level: 0 }];
  const leveledList = [];
  const ansList = [];
  let sum = 0;
  let count = 0;
  let currentLevel = 0;
  while (queue.length) {
    const { node, level } = queue.shift();

    if (node.leftNode) {
      queue.push({ node: node.leftNode, level: level + 1 });
    }

    if (node.rightNode) {
      queue.push({ node: node.rightNode, level: level + 1 });
    }

    leveledList.push({ value: node.value, level });
  }


  for (let i = 0; i < leveledList.length; i += 1) {
    const current = leveledList[i];

    if (current.level > currentLevel) {
      ansList.push(sum / count);
      sum = current.value;
      count = 1;
      currentLevel = current.level;
      continue;
    }

    sum += current.value;
    count += 1;
    currentLevel = current.level;
  }

  ansList.push(sum / count);

  console.log(ansList);
};

breadthFirstAverage(root);
