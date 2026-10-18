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
  
    addTwoNumbers(l1, l2) {



    let leftString = "";
    let rightString = "";

    let leftPtr = l1;
    let rightPtr = l2;

    const dummyNode = new ListNode(-1);
    let dummyPtr = dummyNode;
    while (leftPtr) {
      leftString += leftPtr.val;
      leftPtr = leftPtr.next;
    }
    while (rightPtr) {
      rightString += rightPtr.val;
      rightPtr = rightPtr.next;
    }


    const reversedLeftString = leftString.split("").reverse().join("");
    const reversedRightString = rightString.split("").reverse().join("");

    //reveres strings
    //add them
    //then reverser them again
    const total = Number(reversedLeftString) + Number(reversedRightString);
    const totalStr = total.toString().split("").reverse().join("");

    let i = 0;

    while (i < totalStr.length) {
      const newNode = new ListNode(totalStr[i]);
      dummyPtr.next = newNode;
      dummyPtr = dummyPtr.next;
      i++;
    }
    return dummyNode.next;
  



}

}
