/*
  You are given two non-empty linked lists representing two non-negative integers.
  The digits are stored in reverse order and each of their nodes contain a single digit.
  Add the two numbers and return it as a linked list.

  You may assume the two numbers do not contain any leading zero, except the number 0 itself.

  Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
  Output: 7 -> 0 -> 8
*/


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2, overflow = 0) {
  // handle both empty
  if(l1 === null && l2 === null) {
    if(overflow > 0) {
      return new ListNode(overflow);
    }
    return null;
  }

  // handle one empty
  if(l1 === null || l2 === null) {
    let lastNode = l1 || l2;

    // handle overflow of one
    if(lastNode.val + overflow > 9) {
      return addTwoNumbers(lastNode, new ListNode(0), overflow);
    }

    // handle run ons
    const newListNode = new ListNode(lastNode.val + overflow);
    newListNode.next = addTwoNumbers(lastNode.next, null);
    return newListNode;
  }

  // handle normal
  let sum = l1.val + l2.val + overflow;
  let extraNum = false;

  if(sum > 9) {
    extraNum = Number(sum.toString().substring(0,1));
    sum = Number(sum.toString().substring(1));
  }

  const newListNode = new ListNode(sum);
  newListNode.next = addTwoNumbers(l1.next, l2.next, extraNum);
  return newListNode;
};
