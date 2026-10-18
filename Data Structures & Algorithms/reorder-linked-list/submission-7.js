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

    //iterate to find the middle start fast one ahead to for evens so slow's next points to the mdidle 

    //iterate throuhg the list split into two 
    //reverse the second half and split the chian
    //iterate through the list taking one antoher until the right is empty 


    let slow = head;
    let fast = head.next;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

    }

    let middle = slow.next;
    slow.next = null
    let prev = null

    while (middle) {
        let temp = middle.next;
        middle.next = prev;
        prev = middle;
        middle = temp;
    }



    let left = head;
    let right = prev;

    while (right) {

        let tempLeft = left.next;
        let tempRight = right.next;
        left.next = right;
        right.next = tempLeft;
        left = tempLeft
        right = tempRight
    }
    }
}
