class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
      

      //itetst and find the min 
      // if the current is smaller than my min update it with the index 
      //subtract current if it larger than the min and update max return max 

    let max = 0;
    let min = 0;
      for(let i =1; i< prices.length; i++){

                if( prices[min] > prices[i]){
                    min = i;
                }

                max = Math.max(max, prices[i] - prices[min])
      }
    return max;
    }
}
