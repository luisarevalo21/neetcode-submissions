class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {


        //brute force would be use a double for loop to find the total maximum area 
        //n^2 run time

        //use two pointer left and right
        //takes the the smaller of the idnex and subtractrs the widht to get the area 
        //calculate the max by taking the right -left * min(heights[i], heights[j])
        //update my max if it is larger otherwise continue till elft and right corss 
        //up left if it is smaller up right if it is smaller

        //update max if it is larger than the current max 


        let left = 0;
        let right = heights.length - 1;
        let totalArea = 0;


        while (left < right) {


            const sum = (right - left )* Math.min(heights[left], heights[right])
            console.log(sum)


            totalArea = Math.max(sum, totalArea);

            if (heights[left] < heights[right]) {
                left++;

            }
            else {
                right--;
            }


        }


        return totalArea;
    }
}
