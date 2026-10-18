class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = new Node(-1);
    this.tail = this.head;
  }

  /**
   * @param {number} index
   * @return {number}
   */
  get(index) {
    let head = this.head.next;

    let start = 0;
    while (head !== null) {
      if (start === index) {
        return head.value;
      }
      start++;
      head = head.next;
    }
    return -1;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  insertHead(val) {
    const newHead = new Node(val);
    newHead.next = this.head.next;
    this.head.next = newHead;
    //if list was empty before insterting at the head
    if (newHead.next === null) {
      this.tail = newHead;
    }
  }

  /**
   * @param {number} val
   * @return {void}
   */
  insertTail(val) {
    const newTail = new Node(val);

    this.tail.next = newTail;
    this.tail = newTail;
  }
  /**
   * @param {number} index
   * @return {boolean}
   */
  remove(index) {
    let i = 0;
    let cur = this.head;

    //move one before the one i want to delete
    while (i < index && cur) {
      i++;
      cur = cur.next;
    }

    //check if it exists and there is something in the list
    if (cur && cur.next) {
      if (cur.next === this.tail) {
        this.tail = cur;
      }
      cur.next = cur.next.next;  
          return true;

    }
    return false;
  } 
  

  /**
   * @return {number[]}
   */
  getValues() {
    let cur = this.head.next;
    const returnArray = [];
    while (cur !== null) {
      returnArray.push(cur.value);
      cur = cur.next;
    }
    return returnArray;
  }
}
