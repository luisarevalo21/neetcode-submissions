class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = this.head;
  }

  /**
   * @param {number} index
   * @return {number}
   */
  get(index) {
    if (!this.head) {
      return -1;
    }

    let cur = this.head;
    let i = 0;

    
    while (cur !== null) {
        console.log("cur", cur)
      if (i === index) {
        return cur.value;
      }
      cur = cur.next;
      i++;
    }
    return -1;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  insertHead(val) {
    console.log("head", this.head)
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
    let i = 0;
   let cur = this.head;

    let prev = null;
    while (cur !== null) {
      if (i === index) {
        if (cur === this.tail) {
          this.tail = prev;
        }
        if (cur === this.head) {
          this.head = cur.next;
          return true;
        }
        prev.next = cur.next;
        return true;
      }
      prev = cur;
      cur = cur.next;
      i++;
    }
    return false;
  }

  /**
   * @return {number[]}
   */
  getValues() {
    if (this.head && this.tail) {
      const returnData = [];

      let cur = this.head;

      while (cur) {
        returnData.push(cur.value);
        cur = cur.next;

      }
      return returnData;
    }
    return []
  }
}
