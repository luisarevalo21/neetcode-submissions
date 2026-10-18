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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
         let dummy = new ListNode(-1);
    let left = list1;
    let right = list2; 
    let cur = dummy;

    while(left && right ){
        if(left.val <= right.val){
            const newNode =  left
                cur.next = newNode;
                left = left.next;
                cur = cur.next;


        }
        else{
            const newNode = right
            cur.next = newNode;
            right = right.next;
            cur = cur.next;
        }
    }

    if(left){
        cur.next = left;
    }
    if (right ){
        cur.next = right;
    }
    return dummy.next;
    }
}
