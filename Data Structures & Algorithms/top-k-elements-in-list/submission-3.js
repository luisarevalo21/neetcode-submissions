class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
           const map = {}

    for (let i = 0; i < nums.length; i++) {

        if (map[nums[i]] !== undefined) {

            map[nums[i]] += 1;
        }
        else {
            map[nums[i]] = 1;
        }

    }

    const res = []
    

    let count = k;
    for (const [key, value] of Object.entries(map).sort((a, b) => b[1] - a[1])) {

        if (count > 0) {

            res.push(+ key);
            count--;
        } else {
            console.log(res)
            return res;
        }


    }
    return res

    }
}
