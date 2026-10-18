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
     * @param {number} k
     * @return {ListNode}
     */

    //iterate through the list creating the size 
    //adding values until i reach the end k 
    //using a counter
    //once counter reaches k set to 0 again 
    //continue //reverse the list
    //if my counter is less than k keep the same don't revesr
    //create the linekd list from the final array
    reverseKGroup(head, k) {

        let cur = head;
        let counter = 0;
        const res = []
        let currArray = []
        while (cur !== null) {


            if (counter < k) {

                currArray.push(cur.val)
                counter++
            }

            if (currArray.length === k) {
                counter = 0;

                res.push(...currArray.reverse());
                currArray = []
            }
            cur = cur.next

        }

        res.push(...currArray)

        const dummyNode = new ListNode();
        let ptr = dummyNode;

        // console.log('res', res)
        for (let i = 0; i < res.length; i++) {

            ptr.next = new ListNode(res[i])
            ptr = ptr.next
        }
        return dummyNode.next


    }
}
