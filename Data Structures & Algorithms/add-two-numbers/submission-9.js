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
   * //iterate boht left adn right and continue until eithre or is null
   * add the value and remainder to it
   * if number is larger than 10 get the remainder
   * then get the value to be create the single digit
   *
   * add to my dummy node
   * up the pointers
   *
   */
  addTwoNumbers(l1, l2) {
    const dummy = new ListNode(-1);
    let dummyPtr = dummy;
    let remainder = 0;

    while (l1 || l2 ) {
        const leftVal = l1 ? l1.val :0
        const rightVal = l2 ? l2.val :0

      let total = leftVal + rightVal + remainder;
      remainder =0
      if (total > 9) {
        remainder = Math.floor(total /10)
        total = total % 10;
      }
      dummyPtr.next = new ListNode(total);
      dummyPtr = dummyPtr.next;
      l1 = l1 ? l1.next : null
      l2 = l2 ? l2.next : null
    }
    if(remainder){
        dummyPtr.next = new ListNode(remainder);
        dummyPtr = dummyPtr.next
    }

    return dummy.next;
  }
}
