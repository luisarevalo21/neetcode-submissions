class Solution {
  /**
   * @param {ListNode} head
   * @return {void}
   *
   * brute force
   * iterate through list
   * add them to an array
   * then parse the array by swapping based on the formual
   * n n-1 1 n-2 2 etc
   * constructor by using to pointesr
   * left =0 ;
   * right is n -1;
   * while left is < than right
   * acces the correct values from the the new array alternate between them
   * once left >=right exit loop and construct the linked list and return the head
   *
   * return the new linked list
   */
   reorderList(head) {
    const arr = [];

    const createLinkedList = arr => {
      let dummy = new ListNode(-1);

      let ptr = dummy;
      for (let i = 0; i < arr.length; i++) {
        const newNode = arr[i]
        ptr.next = newNode;
        
        ptr = ptr.next;
        ptr.next = null
      }
      return dummy.next;
    };

    let cur = head;

    while (cur) {
      arr.push(cur);
      cur = cur.next;
    }
    // console.log(arr);

    let left = 0;
    let right = arr.length - 1;
    const returnArr = [];
    let i = 0;
    // how to alternate between them
    while (left <= right) {
      if (i % 2 === 0) {
        returnArr[i] = arr[left];
        left++;
      } else {
        returnArr[i] = arr[right];
        right--;
      }
      i++;
    }

    const newHead = createLinkedList(returnArr);
    console.log("arra", newHead);
    return newHead;
  }
}