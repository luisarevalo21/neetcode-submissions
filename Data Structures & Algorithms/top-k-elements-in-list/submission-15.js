class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */

    ///create an array of the valeus indexe by the value
    //update the count and go backwards to get the value and add to a result up to k times

    topKFrequent(nums, k) {
        const bucket = Array.from({ length: nums.length + 1 }, () => []);

        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
            map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        }

        for (let [key, v] of map) {
            bucket[v].push(key);
        }
        const res = [];
        let count = k;
        for (let j = bucket.length - 1; j >= 0; j--) {
            for (let key of bucket[j]) {
                res.push(key)
                if(res.length === count)return res;
            }
            // for (let i = 0; i < bucket[k].length; i++) {
            //     console.log("bucket", bucket[i]);
            //     if (bucket[i] === undefined) {
            //         console.log("isnie if");
            //         res.push(bucket[i]);
            //         count--;
            //         if (count === 0) {
            //             return res;
            //         }
            //     }

            // for(let i =0; i< bucket[k].length ; i++ ){
            //     res.push(bucket[i])
            //     count--;
            //     if(count ==0)return res;
            // }
        }

        //     if (!bucket[nums[i]]) {
        //         bucket[nums[i]] = 0 + 1;
        //     } else {
        //         bucket[nums[i]] += 1;
        //     }
        // }
        // console.log("bucvket", bucket);

        //     const map = new Map();

        //     for (let i = 0; i < nums.length; i++) {
        //         map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        //     }
        //     console.log("counterArray", map);
        //     const res = [];
        //     let count = k;

        //     const values = [...map.keys()].sort( (a,b)=> map.get(b) - map.get(a));
        //     console.log("values", values);
        //     for (let k =0 ; k <values.length; k++) {
        //     res.push(values[k])
        //         count--;

        //         if (count === 0) {
        //             return res;
        //         }
        //     }
        // }
    }
}
