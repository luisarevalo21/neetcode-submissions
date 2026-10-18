class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        //set the pointers left anr right 


        //check if the mid pointer is greater than left 
        //if so move left to mid +1 since everything to the elft of mid is less tahn the mid so its in the larger sorted array  

        //else move right to mid -1 

        let left = 0;
        let right = nums.length - 1;
        let res = nums[0]

        while (left <= right) {

            if (nums[left] <= nums[right]) {
                res = Math.min(nums[left], res)

            }
            let mid = Math.floor((left + right) / 2)

            if (nums[mid] >= nums[left]) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
            res = Math.min(nums[mid], res)

        }
        return res
    }
}
