class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}


        //create a map count the values foudn sort them based on the frequencey return the array of k 
    //size based on the sorted map takes nlogn because of the sorting 
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map();
        const res: number[] = [];

        for (let i = 0; i < nums.length; i++) {
            map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        }

        console.log("ampa", map);

        const sortedMap = new Map(
            [...map].sort((a: [number, number], b: [number, number]) => b[1] - a[1]),
        );
        console.log("sorted map", sortedMap);

   
        // console.log

        for(let [key, value] of sortedMap){

            res.push(key)
            if(res.length ===k)return res;
        }
        // for (let j = values.length-1; j >= 0; j--) {
        //     res.push(values[j]);
        //     if (res.length === k) {
        //         return res;
        //     }
        // }

        return res;
    }
}
