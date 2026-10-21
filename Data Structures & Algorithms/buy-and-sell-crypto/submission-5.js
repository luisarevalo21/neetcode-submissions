class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     * sliding window as i want to maximimze profit
     * get the current lowest as iterate from left to right
     * lowest value will be used to compared to the largest i've seen on the right side calculate porfit and if its bigger then save the largest profit
     * increment right index to see if i can find a larger number
     * once it reaches the end move left upwards finding a smaller value
     */
    maxProfit(prices) {
        let profit = 0;
        let left = 0;
        let right = 1;
        let curSmallest = 100;
        while (left < prices.length-1) {
            curSmallest = Math.min(prices[left], curSmallest);
            profit = Math.max(profit, prices[left + 1] - curSmallest);
            left++;
           
        }
        return profit;
    }
}
