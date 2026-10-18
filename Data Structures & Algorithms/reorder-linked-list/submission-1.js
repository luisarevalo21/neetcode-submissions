/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
// class ListNode {
//   constructor(val = 0, next = null) {
//     this.val = val;
//     this.next = next;
//   }
// }

class Solution {
  /**
   * @param {ListNode} head
   * @return {void}
   *
   * first get the middle of the list
   * reverse the second half of the list
   * merge the two halves
   *
   */
  reorderList(head) {
    function reverse(head) {
      let cur = head;
      let prev = null;
      while (cur) {
        const temp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = temp;
      }
      return prev;
    }
    let cur = head;

    let slow = cur;
    let fast = cur.next;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    let secondHalf = slow.next;
    slow.next = null;

    fast = reverse(secondHalf);
    const dummy = new ListNode(-1);
    let dummyPtr = dummy;
    let i = 0;
    while (cur || fast) {
      if (i % 2 === 0) {
        dummyPtr.next = cur;
        dummyPtr = dummyPtr.next;

        cur = cur.next;
      } else {
        dummyPtr.next = fast;
        dummyPtr = dummyPtr.next;
        fast = fast.next;
      }
      i++;
    }
    return dummy.next;

    // console.log("Slwo", slow);
    // console.log("fast", fast);
  }
}

// // [2,4,6,8]
// const node1 = new ListNode(2);
// const node2 = new ListNode(4);
// const node3 = new ListNode(6);
// const node4 = new ListNode(8);

// node1.next = node2;
// node2.next = node3;
// node3.next = node4;

// const solution = new Solution();
// console.log(solution.reorderList(node1));
