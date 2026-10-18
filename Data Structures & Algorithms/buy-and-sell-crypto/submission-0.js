class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        //have two pointers left and right 
        //left will go through the prices 
        //right will go l+1 
        //looking for a max profit between the days 

        ///if larger than max profit change it otherwise doesn't hcange it 

        let max =0;
        for(let l = 0; l< prices.length; l++){
            
            let right = l+1;

            while( right < prices.length){
                // if(prices[right] - )

            let diff = prices[right] - prices[l];

            max = Math.max(diff, max);
            right++;
            }

        }
        return max;
    }
}
