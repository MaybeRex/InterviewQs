function ListNode(val) {
  this.val = val;
  this.next = null;
}

const linkedListToArray = (node, ans = []) => {
  if (!node || node.val === undefined || node.val === null) {
    return [];
  }

  ans.push(node.val);

  if (!node.next) {
    return ans;
  }

  return linkedListToArray(node.next, ans);
};

const arrayToLinkedList = (arr) => {
  const newNode = new ListNode(arr.shift());

  if (arr.length) {
    newNode.next = arrayToLinkedList(arr);
  }

  return newNode;
};

const merge = (left, right) => {
  const leftArr = left[0];
  const rightArr = right[0];
  const ans = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      ans.push(leftArr.shift());
      continue;
    }

    ans.push(rightArr.shift());
  }

  ans.push(...leftArr);
  ans.push(...rightArr);

  return [ans];
};

const mergeSort = (arrayList) => {
  if (arrayList.length === 1) {
    return arrayList;
  }

  const middle = Math.floor(arrayList.length / 2);
  const left = arrayList.slice(0, middle);
  const right = arrayList.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

const mergeKLists = (lists) => {
  const arrayList = lists
    .map(node => linkedListToArray(node))
    .filter(arr => arr.length);

  if (arrayList.length === 0) {
    return [];
  }

  if (arrayList.length === 1) {
    return arrayToLinkedList(arrayList[0]);
  }

  const sortedArray = mergeSort(arrayList);
  return arrayToLinkedList(sortedArray[0]);
};
