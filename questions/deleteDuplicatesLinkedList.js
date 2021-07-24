/*
Given the head of a sorted linked list, delete all duplicates such that each element appears only once.
Return the linked list sorted as well.

Input: head = [1,1,2]
Output: [1,2]

Input: head = [1,1,2,3,3]
Output: [1,2,3]
*/

class ListNode {
  constructor(val = undefined, next = undefined) {
    this.val = val;
    this.next = next;
  }
}

const deleteDuplicates = (head) => {
  let list = head;

  while (list) {
    if (list.next && list.val === list.next.val) {
      list.next = list.next.next;
      continue;
    }

    list = list.next;
  }

  return head;
};

console.log(deleteDuplicates(new ListNode(1, new ListNode(1, new ListNode(2)))));
console.log(deleteDuplicates(new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3)))))));
