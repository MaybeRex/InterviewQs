function ListNode(val) {
  this.val = val;
  this.next = next;
}

const holder = new ListNode(null);
const second = new ListNode(null);
const swapPairs = (first) => {
  // move things into holders
  holder.val = first.val;
  second.val = first.next.val;
  second.next = holder;
  holder.next = first.next.next;

  // move them back

  first = holder;
  first.next = second;

  if (first.next.next) {
    swapPairs(first.next.next);
  }

  return first.next;
};
