class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    //thoguht process would use a map store the values if i have not seen it add it and conintue
    // if its the map reutrn false
    //otherwise return at the of the iteration

    //space will be up to O(nums.length or size) O(n)
    //time is the size of tnums O(n)
    hasDuplicate(nums) {
        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
            if (map.has(nums[i])) {
                return true;
            }
            map.set(nums[i], 1);
        }

        return false;
    }
}
