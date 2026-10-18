// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }
class Solution {
  /**
   * @param {Node} head
   * @return {Node}
   */
  copyRandomList(head) {
    let cur = head;
    let map = new Map();
    while (cur) {
      map.set(cur, new Node(cur.val, null));
      cur = cur.next;
    }

    let dummy = new Node(-1);
    let dummyPtr = dummy;
    cur = head;
    while (cur) {
      const node = map.get(cur);
      dummyPtr.next = map.get(cur);
      const randomNode = map.get(cur.random);
      node.random = randomNode;
      dummyPtr = node;
      cur = cur.next
    }

    return dummy.next;
  }
}
