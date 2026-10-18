class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {


        //eating all the bannas within h time

        //can start at 1 then up to the largest number in piles 
        //since the largest will be able to eat all of them but want to minimize the number

        //from 1 - n can iterate which will  O(N) 
        //or use binary search finding the smalelst 
        //if the the mid is <= h i update my res 
        // then move right to the left 
        //if mid is larger than h then i move left to the right 
        //since i couldn't eat all the banans 


        let left = 1;
        let right = Math.max(...piles);
        let res = right;


        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            let counter = 0;
            let i = 0;

            while (i < piles.length) {

                counter += Math.ceil(piles[i] / mid)
                i++
            }


            if (counter <= h) {
                right = mid - 1;
                res = Math.min(mid, res)
            }
            else if (counter > h) {
                left = mid + 1
            }

        }
        return res;

    }
}
