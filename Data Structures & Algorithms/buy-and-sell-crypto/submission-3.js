class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        //set the left pointer to the left and right will be one after
        //check if the left is larger than the current if so update the left 
        //calculate the idfference and update the max profit
        //return the max profit

        let max =0;
        let left = 0;

        for (let right = 0; right < prices.length; right++) {

            if (prices[left] > prices[right]) {
                left = right;
            }

            max = Math.max(max, prices[right] - prices[left])

        }
    return max;
    }
}
