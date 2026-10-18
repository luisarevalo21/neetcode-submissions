class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {


        const maxHeap = new MaxPriorityQueue ()
        for (let i = 0; i < nums.length; i++) {
            maxHeap.push(nums[i])
        }

        // console.log(maxHeap.toArray())

        while (k > 1) {
            maxHeap.pop();
            k--;
        }


        return maxHeap.front()
    }
}
