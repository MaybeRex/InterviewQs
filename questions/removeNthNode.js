function ListNode(val) {
  this.val = val;
  this.next = null;
}

const arrayToLinkedList = (list) => {
  const newNode = new ListNode(list.shift());

  if (list.length) {
    newNode.next = arrayToLinkedList(list);
  }

  return newNode;
};

const linkedListToArray = (node, list = []) => {
  if (!node) {
    return list;
  }
  list.push(node.val);
  return linkedListToArray(node.next, list);
};

const removeNthFromEnd = (node, n) => {
  const nodeList = linkedListToArray(node);
  const removeIndex = nodeList.length - n;
  nodeList.splice(removeIndex, 1);

  if (!nodeList.length) {
    return [];
  }

  return arrayToLinkedList(nodeList);
};

// NOTE this worked
