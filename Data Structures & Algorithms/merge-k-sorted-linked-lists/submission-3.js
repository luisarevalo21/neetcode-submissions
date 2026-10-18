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
        if (lists.length === 0) {
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

        let lst1 = list1;
        let lst2 = list2;
        let dummyPtr = dummy;
        while (lst1 && lst2) {
            if (lst1.val <= lst2.val) {
                dummyPtr.next = lst1;
                lst1 = lst1.next
            }
            else {
                dummyPtr.next = lst2;
                lst2 = lst2.next
            }
            dummyPtr = dummyPtr.next;

        }

        while (lst1) {
            dummyPtr.next = lst1
            lst1 = lst1.next
            dummyPtr = dummyPtr.next;

        }
        while (lst2) {
            dummyPtr.next = lst2
            lst2 = lst2.next
            dummyPtr = dummyPtr.next;

        }

        return dummy.next

    }
}
