using System.Collections.Generic;

/*
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order and each of their nodes contain a single digit. 
Add the two numbers and return it as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself. 

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.

static void Main(string[] args)
{
    var l1 = new ListNode(2);
    var l2 = new ListNode(5);
    
    l1.Next = new ListNode();
    l2.Next = new ListNode();

    l1.Next.Val = 4;
    l2.Next.Val = 6;

    var ans = AddTwoNumbers.Solution(l1, l2);
    
    Console.WriteLine(ans);
}
*/
namespace cs
{
    public class AddTwoNumbers
    {
        
        public static ListNode Solution(ListNode firstNode, ListNode secondNode)
        {
            var firstStack = ToQueueFromNode(firstNode);
            var secondStack = ToQueueFromNode(secondNode);
            var ans = new Queue<int>();
            var carryOver = 0;
            while (firstStack.Count > 0 || secondStack.Count > 0)
            {
                var firstValue = firstStack.Count > 0 ? firstStack.Dequeue() : 0;
                var secondValue = secondStack.Count > 0 ? secondStack.Dequeue() : 0;

                var sum = firstValue + secondValue + carryOver;

                if (sum > 9)
                {
                    sum -= 10;
                    carryOver = 1;
                }
                else
                {
                    carryOver = 0;
                }

                ans.Enqueue(sum);
            }

            if (carryOver > 0)
            {
                ans.Enqueue(carryOver);
            }

            return ToNodeListFromQueue(ans);
        }

        public static Queue<int> ToQueueFromNode(ListNode node)
        {
            var list = new Queue<int>();

            while (node != null)
            {
                list.Enqueue(node.Val);
                node = node.Next;
            }

            return list;
        }

        public static ListNode ToNodeListFromQueue(Queue<int> stack)
        {
            if (stack.Count == 0)
            {
                return new ListNode();
            }
            var ans = new ListNode(stack.Dequeue());
            var ansHead = ans;

            while (stack.Count > 0)
            {
                ansHead.Next = new ListNode(stack.Dequeue());
                ansHead = ansHead.Next;
            }

            return ans;
        }
        
        public static ListNode CorrectSolution(ListNode l1, ListNode l2)
        {
            var ans = new ListNode();
            var ansHead = ans;
            int carryOver = 0;
            while (l1 != null || l2 != null)
            {
                var firstValue = l1?.Val ?? 0;
                var secondValue = l2?.Val ?? 0;

                var sum = firstValue + secondValue + carryOver;
                
                if (sum > 9)
                {
                    carryOver = 1;
                    sum -= 10;
                }
                else
                {
                    carryOver = 0;
                }

                ansHead.Next = new ListNode(sum);
                ansHead = ansHead.Next;

                if (l1 != null)
                {
                    l1 = l1.Next;
                }
                
                if (l2 != null)
                {
                    l2 = l2.Next;
                }
            }

            if (carryOver > 0)
            {
                ansHead.Next = new ListNode(carryOver);
            }

            return ans.Next;
        }

       
    }
}
