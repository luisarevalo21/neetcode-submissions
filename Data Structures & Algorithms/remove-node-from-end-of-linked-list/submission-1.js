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
   * delay the slow pointer by n
   * once iterate slow until fast is out of bounds.
   * slow will be at the node to delete.
   * keep a prev to keep the prev and set prev.nex to slow.next
   * return the head
   */
  removeNthFromEnd(head, n) {
    let delay = 0;
    let dummy = new ListNode(-1, head);
    let slow = head;
    let fast = head;
    let prev = null;
    while (fast && fast.next) {
      if (delay >= n - 1) {
        prev = slow;
        slow = slow.next;
      }
      delay++;
      fast = fast.next;
    }

    if (prev === null) return head.next;

    prev.next = slow.next;
    return dummy.next;
  }
}