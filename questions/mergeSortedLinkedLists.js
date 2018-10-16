function ListNode(val) {
  this.val = val;
  this.next = null;
}

const linkedListToArray = (node, arr = []) => {
  if (!node.next) {
    (node.val === undefined || node.val === null) ? null : arr.push(node.val);
    return arr;
  }

  arr.push(node.val);
  return linkedListToArray(node.next, arr);
};

const merge = (left, right) => {
  const ans = [];
  while (left.length && right.length) {
    if (left[0] > right[0]) {
      ans.push(right.shift());
      continue;
    }
    ans.push(left.shift());
  }

  ans.push(...left);
  ans.push(...right);

  return ans;
};

const arrayToLinkedList = (array) => {
  const nextNode = new ListNode(array.shift());

  if (array.length) {
    nextNode.next = arrayToLinkedList(array);
  }

  return nextNode;
};

const mergeTwoLists = (first, second) => {
  if (first === null) {
    if (second !== null) {
      return second;
    }

    return [];
  }

  if (second === null) {
    if (first !== null) {
      return first;
    }

    return [];
  }

  const firstList = linkedListToArray(first);
  const secondList = linkedListToArray(second);
  const mergedList = merge(firstList, secondList);
  const ans = arrayToLinkedList(mergedList);

  return ans.val === undefined ? [] : ans;
};
