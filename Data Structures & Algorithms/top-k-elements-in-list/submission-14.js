class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */

    ///create an array of the valeus indexe by the value
    //update the count and go backwards to get the value and add to a result up to k times

    topKFrequent(nums, k) {
        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
            map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        }
        console.log("counterArray", map);
        const res = [];
        let count = k;

        const values = [...map.keys()].sort( (a,b)=> map.get(b) - map.get(a));
        console.log("values", values);
        for (let k =0 ; k <values.length; k++) {
        res.push(values[k])
            count--;

            if (count === 0) {
                return res;
            }
        }
    }
}
