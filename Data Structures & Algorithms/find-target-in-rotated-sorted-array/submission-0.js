class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1

        while (left <= right) {

            let middle = Math.floor((left + right) / 2)

            if (nums[middle] === target) {
                return middle
            }


            if ((nums[left] <= nums[middle])) {

                if ((nums[left] <= target && target < nums[middle]))
                    right = middle - 1

                else {
                    left = middle + 1
                }

            }

            //if not sorted check the left and riht boudns to see where i should shrink
            else if (nums[left] > target) {
                left += 1
            }
            else {
                right -= 1

            }


        }
        return -1;
    }
}
