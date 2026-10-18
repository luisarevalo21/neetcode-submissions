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



        //works by creating a dummy node and setting its next to head
    // it works by setting fast n spaces away so the space is size n
    //slow and fast are moved till fast it nukk
    //slow will be one before and i update the ptrs and return dummyNode.next

        let dummyNode = new ListNode(-1, head)
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

        slow.next = slow.next.next
        return dummyNode.next

    }
}
