class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.left = new Node(-1, -1);
        this.right = new Node(-1, -1)
        this.cache = new Map();

        this.left.next = this.right;
        this.right.prev = this.left
    }


    //adds to the right of the node
    insert(node) {

        let prev = this.right.prev;
        prev.next = node;
        this.right.prev = node;
        node.next = this.right;
        node.prev = prev;

    }
    //removes wherever it is 
    remove(node) {
        let prev = node.prev;
        let next = node.next;

        prev.next = next;
        next.prev = prev;

    }
    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        // if its in my cache i need to remove. it 
        //then add it again to the right since i accesed it 
        if (this.cache.has(key)) {
            this.remove(this.cache.get(key))
            this.insert(this.cache.get(key))
            return this.cache.get(key).value
        }
        return -1;

    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    //add to the right of the list
    put(key, value) {

        //node exists need to remove it 
        if (this.cache.has(key)) {
            this.remove(this.cache.get(key))
        }

        let newNode = new Node(key, value);

        this.cache.set(key, newNode);
        this.insert(newNode);

        if (this.cache.size > this.capacity) {
            let lru = this.left.next;
            this.remove(lru)
            this.cache.delete(lru.key)

        }

    }
}
class Node {
    constructor(key, value, prev = null, next = null) {
        this.key = key;
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}