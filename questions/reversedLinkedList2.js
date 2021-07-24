/*
Given the head of a singly linked list and two integers left and right where left <= right,
reverse the nodes of the list from position left to position right, and return the reversed list.

Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]

Input: head = [5], left = 1, right = 1
Output: [5]
*/
class ListNode {
  constructor(val = undefined, next = undefined) {
    this.val = val;
    this.next = next;
  }
}

const reverseBetween = (head, left, right) => {
  if (!head.next) {
    return head;
  }

  let list = head;
  let saved = null;
  let count = 0;
  let tail = null;
  let current = null;
  let subList = null;
  while (list) {
    count += 1;

    if (count === left - 1) {
      saved = list;
    }

    if (count === left) {
      current = new ListNode(list.val);
      subList = list.next;
      tail = current;
      continue;
    }

    if (count > left && count <= right) {
      const newCurrent = new ListNode(subList.val);
      newCurrent.next = current;
      current = newCurrent;
      subList = subList.next;
      continue;
    }

    if (count > right) {
      saved.next = current;
      tail.next = subList;
      break;
    }

    list = list.next;
  }

  return head;
};

console.log(reverseBetween(new ListNode(
  1,
  new ListNode(
    2,
    new ListNode(
      3,
      new ListNode(
        4,
        new ListNode(5),
      ),
    ),
  ),
), 2, 4));
