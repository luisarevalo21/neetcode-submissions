class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let min = 100000000000;

        let left = 1;
        let right = Math.max(...piles);
        while (left <= right) {
            // console.log("left", left);
            // console.log("right", right);
            let middle = Math.floor((left + right) / 2);
            let i = 0;
            let counter = 0;

            while (i < piles.length) {
                counter += Math.ceil(piles[i] / middle);
                i++;
            }

            if (counter <= h) {
                min = Math.min(middle, min);
            }

            if (min <= right) {
                right = middle - 1;
            } else left = middle + 1;
        }
        return min;


        // console.log(Math.round(3 / 11));
        //




    }
}
