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



        let carry = 0;
        const dummyNode = new ListNode();
        let dummyPtr = dummyNode;


        while (l1 || l2) {

            let l1Val = l1 ? l1.val : 0;
            let l2Val = l2 ? l2.val : 0

            let sum = l1Val + l2Val + carry;

            let newNode;
            if (sum > 9) {
                newNode = new ListNode(sum % 10)
                carry = Math.floor(sum / 10)

            } else {
                newNode = new ListNode(sum)
                carry = 0;

            }



            dummyPtr.next = newNode;
            dummyPtr = dummyPtr.next;


            l1 = l1 ? l1.next : null;
            l2 = l2 ? l2.next : null;
        }

        if (carry > 0) {
            dummyPtr.next = new ListNode(carry);

        }
        return dummyNode.next
        //extra memory would be store each one in an array reverse it 
        //add them place it in an array and create the lsit 
        //reverse one list 
        //

        //add the values if a carry occurs set the var 
        //then add again if the carry is needed 
        //construct using. a dummy ponter for the final lsit 



    }
}
