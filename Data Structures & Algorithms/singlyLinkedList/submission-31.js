class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
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
    let cur = this.head.next;
    let start = 0;

    while (cur !== null) {
      if (index === start) {
        return cur.val;
      }
      cur = cur.next;
      start++;
    }
    return -1;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  insertHead(val) {
    const newNode = new Node(val);
    newNode.next = this.head.next;
    this.head.next = newNode;

    if (newNode.next === null) {
      this.tail = newNode;
    }
  }

  /**
   * @param {number} val
   * @return {void}
   */
  insertTail(val) {
    const newNode = new Node(val);

    this.tail.next = newNode;
    this.tail = newNode;
  }

  /**
   * @param {number} index
   * @return {boolean}
   */
  remove(index) {
    let start = 0;
    let cur = this.head.next;
    console.log('cur', cur)
    let prev = null;

    //empty
    if(!this.head.next){
        return false
    }
    if (start === index) {
      this.head.next = cur.next;
      return true;
    }
    while (cur !== null) {
      if (start === index) {
        if(cur === this.tail){
        this.tail = prev;

        }
        prev.next = cur.next;


        return true;
      }
      prev = cur;
      cur = cur.next;
      start++;
    }
    return false;
  }

  /**
   * @return {number[]}
   */
  getValues() {
    let cur = this.head.next;
    const returnArr = [];
    while (cur !== null) {
      returnArr.push(cur.val);
      cur = cur.next;
    }
    return returnArr;
  }
}
