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
     * @return {void}
     */
      reorderList(head) {
    let slow = head;
    let fast = head.next;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    let rightHalf = slow.next;
    slow.next = null;

    let prev = null;
    while (rightHalf) {
      const temp = rightHalf.next;
      rightHalf.next = prev;
      prev = rightHalf;
      rightHalf = temp;
    }

    //right half is the reversed now, stored in prev

    let cur = head;

    while (prev) {
      const temp1 = cur.next;
      const temp2 = prev.next;
      cur.next = prev;
      prev.next = temp1;
      cur = temp1;
      prev = temp2;
    }
    // console.log("head", head.next);
  }
}
