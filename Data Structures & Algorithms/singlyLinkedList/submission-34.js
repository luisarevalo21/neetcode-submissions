class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * @param {number} index
   * @return {number}
   * if it is empty return -1
   * otherwise a head exists and iterate through the list to find the index
   * return -1 if the index is not found
   */
  get(index) {
    let start = 0;
    let cur = this.head;
    while (cur !== null) {
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
   *
   *
   */
  insertHead(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
  }

  /**
   * @param {number} val
   * @return {void}
   * if the head/tail is null
   * assigned the tail to the new node
   */
  insertTail(val) {
    const newNode = new Node(val);
    if (!this.tail) {
      this.tail = newNode;
      this.head = newNode;
      return;
    }

    this.tail.next = newNode;
    this.tail = newNode;
  }

  /**
   * @param {number} index
   * @return {boolean}
   */
  remove(index) {
    // if(!this.head || !this.tail){
    // return false;
    // }

    let cur = this.head;
    let prev = null;
    let start = 0;

    //geet cur to be one ebfore the value
    while (start < index && cur ) {
      prev = cur;
      cur = cur.next;

      start++;
    }
    if (cur) {
      //dleting head
      if (prev === null) {
        this.head = cur.next;
        return true;
      }
      //deleting tail
      if (!cur.next) {
        this.tail = prev;
        prev.next = null;
        return true;
      }

      prev.next = cur.next;
      return true;
    }
    return false;
  }

  /**
   * @return {number[]}
   */
  getValues() {
    if (!this.head || !this.tail) {
      return [];
    }

    let cur = this.head;
    const returnArr = [];
    while (cur !== null) {
      returnArr.push(cur.val);
      cur = cur.next;
    }
    return returnArr;
  }
}
