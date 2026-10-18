class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
           const map = new Map();

    for (let i = 0; i < nums.length; i++) {

        const result = target - nums[i]

        if (map.has(result)) {
            return [i, map.get(result)]
        }
        map.set(nums[i], i)
    }
    }
}
