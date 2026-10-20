class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    //create a map count the values foudn sort them based on the frequencey return the array of k
    //size based on the sorted map takes nlogn because of the sorting
    //
    //optimal, create buckets of size nums.length+1 to account for 0 index. 
    //each bucket will create an array bucket within the bucket
    //count the freq in a map key, value is num, frequencey
    //add them to the buckets iterateing through the map the map and pushing hte vlaue into their respective bucekt based on frequcny. multiple keys can appears more than once.
    //example 1 can appear once and 2 can appear once so they go in the index of 1 in the bucket
    //then iterate backwards on the buckets a bucket can have multiple values so a second for loop is needed to iterate trhough this nested array once the res is size K return the res
    topKFrequent(nums, k) {
        const map = new Map();
        const buckets = Array.from({ length: nums.length +1  }, () => []);

        for (let i = 0; i < nums.length; i++) {

            map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        }

        //key -number, value =occurance freq
        // console.log("map", map);
        for (let [key, value] of map.entries()) {
            buckets[value].push(key)
        }
        const res = [];
        // console.log("buckets", buckets);

        for (let j = buckets.length - 1; j >= 0; j--) {
            // console.log("buckest", buckets[j]);
            // if(buckets[j] === 0)continue
            for (let val of buckets[j]) {
                // console.log("val", val);
                res.push(val);
                if (res.length === k) return res;
            }
            // for (let  = 0; k<buckets[j].length; k++ ) {
            //     console.log("val", val);
            //     if (val === 0) {
            //         break;
            //     }
            //     res.push(buckets[k]);
            //     if (res.length === k) {
            //         return res;
            //     }
            // }
        }

        // console.log('buckest', buckets)
    }
}
