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
     * @return {ListNode}
     */
    reverseList(head) {
        //p c
        // <-1 ->2->3 ->4 ->null
        //start at the begining 
        //save the next node
        //cur node will point to prev
        //assigned prev node to cur 
        //move pointer up 
        let cur = head; 

        let prev = null
        while (cur !== null){


            const next = cur.next;

            cur.next = prev;    
            prev= cur;
            cur =  next

        }



console.log("prev", prev)
return prev







    }
}
