class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {

        const res = []
        const deque = []


        let left = 0;
        let right = 0
        for (right; right < k; right++) {
            if (deque.length === 0) {
                deque.push(right);
            }

            else {

                while (deque.length > 0 && nums[right] > nums[deque[deque.length - 1]]) {
                    deque.pop();
                }
                deque.push(right)
            }

        }
        res.push(nums[deque[0]])
        console.log(res)


        for (right; right < nums.length; right++) {



            //whie current is larger than the top pop 
            while (deque.length > 0 && nums[right] > nums[deque[deque.length - 1]]) {
                deque.pop();
            }

            deque.push(right);


            if (left === deque[0]) {
                deque.shift();
            }
            res.push(nums[deque[0]])
            left++
        }


        return res
    }
}
