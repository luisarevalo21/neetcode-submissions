class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        //create two pointers left and right 
        //check if the the left is smaller than the right 
        //if so calcuate max profit 
        //if not up left 
        //continue right till the end 

        let left = 0;
        let max = 0
        for (let right = 1; right < prices.length; right++) {


            if (prices[left] >prices[right]) {
                console.log("isnide left", left)
                left = right;
            }
            max = Math.max(max, prices[right] - prices[left])
        }

        return max
    }
}
