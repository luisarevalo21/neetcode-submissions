class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {


        //sort the array 
        //get the top two elemetns combine then add back to the array 
        //sort again then repeat until nothin remainds in the array or one element remains 



        stones.sort((a, b) => a - b);

        while (stones.length >= 2) {
            let x = stones[stones.length - 1];
            let y = stones[stones.length - 2] ?? 0;
            stones.pop();
            stones.pop();
            let res = Math.abs(x - y);
            stones.push(res);
            stones.sort((a, b) => a - b);

        }



        return stones[0]        // console.log("stones", stones)
    }
}
