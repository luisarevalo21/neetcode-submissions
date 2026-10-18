class MedianFinder {
    constructor() {

        this.maxHeap = new PriorityQueue((a, b) => b - a);
        this.minHeap = new PriorityQueue((a, b) => a - b)
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.maxHeap.push(num);

        //if the top of the maxHeap is larger than the top of min heap pop from the maxHeap
        if (this.maxHeap.size() > 0 && this.minHeap.size() > 0 && this.maxHeap.front() > this.minHeap.front()) {
            const cur = this.maxHeap.pop();
            this.minHeap.push(cur)
        }
        //if the sizes are off pop from the bigger one 
        if (this.maxHeap.size() > this.minHeap.size() + 1) {
            const cur = this.maxHeap.pop();
            this.minHeap.push(cur)

        }
        if (this.maxHeap.size() + 1 < this.minHeap.size()) {
            const cur = this.minHeap.pop();
            this.maxHeap.push(cur)
        }



        console.log("maxHeap.", this.maxHeap.toArray());
        console.log("minHeap.", this.minHeap.toArray());

    }

    /**
     * @return {number}
     */
    findMedian() {

        if (this.maxHeap.size() > this.minHeap.size()) {
            return this.maxHeap.front()
        }
        else if (this.maxHeap.size() < this.minHeap.size()) {
            return this.minHeap.front();
        }
        return (this.maxHeap.front() + this.minHeap.front()) / 2

    }
}
