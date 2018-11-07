// TODO convrt this to JS later, hated this problem
public class Solution {
    public ListNode swapPairs(ListNode head) {
      if(head==null) return null;
      if(head.next==null) return head;
      ListNode previous=null;
      ListNode current=head;
      ListNode runner=head.next;
      while(runner!=null && runner!=current)
      {
        current.next=runner.next;
        runner.next=current;
        if(previous==null)
        {
          previous=runner;
          head=previous;
          previous=previous.next;
        }else
        {
          previous.next=runner;
          previous=previous.next.next;
        }
        current=current.next;
        if(current==null) break;
        runner=runner.next.next.next;

      }
      return head;
    }
}
