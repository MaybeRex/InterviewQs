/*
Given the head of a sorted linked list, delete all nodes that have duplicate numbers,
leaving only distinct numbers from the original list. Return the linked list sorted as well.

Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]

Input: head = [1,1,1,2,3]
Output: [2,3]
*/

class ListNode {
  constructor(val = undefined, next = undefined) {
    this.val = val;
    this.next = next;
  }
}

const deleteDuplicates = (head) => {
  let list = head;
  const map = {};
  let ansHead = null;
  let ans = null;

  while (list) {
    if (map[list.val]) {
      list = list.next;
      continue;
    }

    map[list.val] = true;
    if (list.next && list.val === list.next.val) {
      continue;
    }

    if (!ansHead) {
      // redefine it, cannot reassign it
      ansHead = new ListNode(list.val);
      ans = ansHead;
      continue;
    }

    // redefine it, cannot reassign it
    ans.next = new ListNode(list.val);
    ans = ans.next;
    list = list.next;
  }

  return ansHead;
};

console.log(deleteDuplicates(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3, new ListNode(4, new ListNode(4, new ListNode(5)))))))));
console.log(deleteDuplicates(new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3)))))));
