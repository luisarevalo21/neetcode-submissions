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
     */
    removeNthFromEnd(head, n) {



        let dummyNode = new ListNode(-1)
        dummyNode.next = head
        let fast = head;
        let slow = dummyNode;
        let counter = 0;
        while (counter < n) {
            counter++
            fast = fast.next
        }

        while (fast) {
            fast = fast.next;
            slow = slow.next
        }
        // console.log("slow", slow)
        // console.log('fast', fast)
        // if (!slow.next) return slow.next
        slow.next = slow.next.next
        return dummyNode.next

    }
}
