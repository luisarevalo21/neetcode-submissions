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
   * @param {ListNode} l1
   * @param {ListNode} l2
   * @return {ListNode}
   */
  addTwoNumbers(l1, l2) {
    let left = l1;
    let right = l2;

    const dummy = new ListNode(-1);
    let dummyPtr = dummy;
    let remiander = 0;
    while (left && right) {
      let total = left.val + right.val + remiander;
      remiander = 0;
      if (total > 9) {
        remiander = total > 9 ? 10 - 9 : 0;
        total = total - 10;
      }
      const newNode = new ListNode(total);
      dummyPtr.next = newNode;
      dummyPtr = dummyPtr.next;
      left = left.next;
      right = right.next;
    }

    while (left) {
      let total = left.val + remiander;
      remiander = 0;
      if (total > 9) {
        remiander = total > 9 ? total - 9 : 0;
        total = total - 10;
      }
      const newNode = new ListNode(total);
      dummyPtr.next = newNode;
      dummyPtr = dummyPtr.next;
      left = left.next;
    }
    while (right) {
      let total = right.val + remiander;
      if (total > 9) {
        remiander = total > 9 ? total - 9 : 0;
        total = total - 10;
      }
      const newNode = new ListNode(total);
      dummyPtr.next = newNode;
      dummyPtr = dummyPtr.next;
      right = right.next;
    }
    if (remiander) {
      const newNode = new ListNode(remiander);
      dummyPtr.next = newNode;
      dummyPtr = dummyPtr.next;
    }

    return dummy.next;
  }
}
