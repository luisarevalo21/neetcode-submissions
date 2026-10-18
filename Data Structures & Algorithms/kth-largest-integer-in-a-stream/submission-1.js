class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {

        this.k = k;
        this.nums = nums
        this.minHeap = new MinPriorityQueue();
        this.nums.forEach((num) => this.minHeap.push(num)); // push is an alias for enqueue

        // this.minHeap = new MinPriorityQueue()

        while (this.minHeap.size() > this.k) {
            this.minHeap.dequeue()
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.minHeap.push(val);

        while (this.minHeap.size() > this.k) {
            this.minHeap.dequeue();
        }
        // console.log(this.minHeap.toArray())

        return this.minHeap.front()
        // return -1
    }

}