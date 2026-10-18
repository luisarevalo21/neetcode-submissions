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

    if (this.head.next === null) {
      this.head.next = newHead;
      this.tail = this.head.next;
      return;
    }

    newHead.next = this.head.next;
    this.head.next = newHead;

    // if (this.head === null) {
    //   this.head = newHead;
    //   this.tail = newHead;

    //   return;
    // }
    // newHead.next = this.head;
    // this.head = newHead;
    // return;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  insertTail(val) {
    const newTail = new Node(val);
    if (this.head.next === null) {
      this.head.next = newTail;

        this.tail = this.head.next;  
      return;
    }
   
    this.tail.next = newTail;
    this.tail = newTail;
    
  }
  /**
   * @param {number} index
   * @return {boolean}
   */
  remove(index) {
    if (this.head.next === null ) {
      return false;
    }
    //removing head
    if(index ===0){
        this.head.next = this.head.next.next
         
        return true;
    }
    let start = 0;
    // if (index === 0) {
    //   this.head.next = null;
    //   return true;
    // }

    let cur = this.head.next;
    let prev = null;

    while (cur !== null) {
      if (start === index) {
        if(this.tail === cur){
            this.tail = prev;

        }
        prev.next = cur.next;

        return true;
      }

      start++;
      prev = cur;
      cur = cur.next;
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
