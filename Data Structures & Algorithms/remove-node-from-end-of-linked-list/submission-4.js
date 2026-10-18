/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
  /**
   * @param {ListNode} head
   * @param {number} n
   * @return {ListNode}
   * brute force with extra memory
   * iterate and store into an array
   * set Length -n to the value of -1
   * iterate through array if -1 is found skip it.
   * reurn the head
   *
   * alterate
   *set slow to the dummy node 
   set fast to be up to n spaces ahead. 
   then iterate until fast is out of bounds 
   slow will be one before the ndoe to remove 
   set slwo.next to be slow.next.next
   return dummy.next
   */
  removeNthFromEnd(head, n) {
      
      let dummy = new ListNode(-1, head);
      let slow = dummy;
      let fast = head;
      let delay = 0;
      while (delay < n) {
          fast = fast.next;
          delay++;
        }
        
        while (fast) {
            slow = slow.next;
            fast = fast.next;
        }
        
        slow.next = slow.next.next;
        return dummy.next;
        // console.log("slow", slow);
    }
}