class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {

        //find the max piles creating the binary search

        //search and calculate the total time to eat the bannas at the current rate 

        //if it is less than h 
        //update my res
        //if the res is less than right? 
        //move right to k - 1
        //if it was to larger update the left to +1 


        let left = 1;
        let right = Math.max(...piles);

        let res = right;

        while (left <= right) {


            let k = Math.floor((left + right) / 2)

            let counter = 0;

            let i = 0;

            while (i < piles.length) {
                counter += Math.ceil(piles[i] / k)
                i++
            }
            if (counter <= h) {
                res = Math.min(res, k)
                right = k - 1
            }
            else {
                left = k + 1
            }

        }
        return res
    }
}
