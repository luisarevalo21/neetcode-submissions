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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */

    //
    mergeKLists(lists) {
        if(lists.length ===0){
            return null
        }


        for (let i = 1; i < lists.length; i++) {
            const sortedList = this.mergeTwoLists(lists[i], lists[i - 1])
            lists[i] = sortedList;
        }

        return lists[lists.length - 1];

    }
    mergeTwoLists(list1, list2) {
        const dummy = new ListNode();
        let dummyPtr = dummy;
        while (list1 && list2) {
            if (list1.val <= list2.val) {
                dummyPtr.next = list1;
                dummyPtr = dummyPtr.next;
                list1 = list1.next
            }
            else {
                dummyPtr.next = list2;
                dummyPtr = dummyPtr.next;
                list2 = list2.next
            }
        }

        if (list1) {
            dummyPtr.next = list1
        }
        if (list2) {
            dummyPtr.next = list2
        }

        return dummy.next

    }
}
