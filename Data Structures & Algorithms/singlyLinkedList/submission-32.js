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

    while (cur) {
      if (start === index) {
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
    //if list was empty before inserting
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
  //start at dummy node
  //iterte until 1 before the node to delte and cur exists

  //if cur exists and the next exits
  //if its the tail update the tail poitner to cuir
  //delete the node
  remove(index) {
    let start = 0;
    let cur = this.head;
    //incase we go out of bounds
    while (start < index && cur) {
      start++;
      cur = cur.next;
    }

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
    const returnArr = [];

    let cur = this.head.next;
    while (cur !== null) {
      returnArr.push(cur.val);
      cur = cur.next;
    }
    return returnArr;
  }
}
