class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    //brute forcwe would n^2 checking each one till i reach the end

    //optimal using a map
    //iterate if the diff is in the map get it and reutrn it
    //otherwise i continute till i find it guranteed to find one
    twoSum(nums, target) {
        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
            let diff = target - nums[i];
            if (map.has(diff)) {
                return [map.get(diff), i];
            }
            map.set(nums[i], i);
        }
    }
}
