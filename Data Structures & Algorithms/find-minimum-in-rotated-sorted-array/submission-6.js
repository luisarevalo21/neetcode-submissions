class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0;
        let right = nums.length - 1;
        while (left <= right) {

            let middle = Math.floor(((left + right) / 2));
            console.log("middle", middle)

            if (nums[middle] < nums[right]) {
                right -= right-middle
            }
            else if (nums[middle] > nums[right]) {

                left = middle+1
            }
            else {
                return nums[middle]
            }

        }
    }
}
