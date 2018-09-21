/*
  Notes: trick learned here, you can indefinitely add to a linked list by assigning
  the .next value to the call to recursion
 */

// * Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (
  first,
  second,
  overflow = 0,
) => {
  first = first || new ListNode(0);
  second = second || new ListNode(0);

  const currentFirst = first.val || 0;
  const currentSecond = second.val || 0;

  let sum = currentFirst + currentSecond + overflow;
  overflow = 0;

  if (sum > 9) {
    sum -= 10;
    overflow = 1;
  }

  const ans = new ListNode(sum);

  // NOTE trick learned
  if (first.next !== null || second.next !== null || overflow > 0) {
    ans.next = addTwoNumbers(first.next, second.next, overflow);
  }

  return ans;
};
