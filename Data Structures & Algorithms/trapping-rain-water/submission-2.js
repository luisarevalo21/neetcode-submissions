class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {

        //set left and right to the start and end of the array 
        ///max left and max right will be set to the left and right values 
        //while left< right 
        //check which is smaller
        //increase the left or right pointer
        //calculate the sum at the current indx 
        //increase the smaller one and update the max left or max right 
        //continue until left and right cross 
        //return the sum 



        let left = 0;
        let right = height.length - 1;
        let sum = 0;
        let maxLeft = height[left];
        let maxRight = height[right]
        while (left < right) {


            if (maxLeft <= maxRight) {
                left++
                const value = Math.min(maxLeft, maxRight) - height[left]
                sum += value < 0 ? 0 : value
                maxLeft = Math.max(maxLeft, height[left]);
            }
            else {
                right--;

                const value = Math.min(maxLeft, maxRight) - height[right]
                sum += value < 0 ? 0 : value
                maxRight = Math.max(maxRight, height[right])
            }


        }
        return sum;

    }
}
