class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {

        //when iterating if i see a bar that is less than the top of the stack pop teh current 
        //top and calculate the area it can form'
        //save the index to the current height im looking at and push to my stack 
        //continue until i reach the end 
        //if stack has items calculate the area they form from goin to the elft 
        ///return the max area 

        const stack = [];
        let maxArea = 0;

        for (let i = 0; i < heights.length; i++) {

            let left = i;

            while (stack.length > 0 && stack[stack.length - 1].height > heights[i]) {
                const poppedHeight = stack.pop();
                const width = i - poppedHeight.index;

                maxArea = Math.max(maxArea, width * poppedHeight.height)
                left = poppedHeight.index;
            }
            stack.push({ height: heights[i], index: left })

        }


        for (let i = 0; i < stack.length; i++) {

            const curHeight = stack[i]
            const width = heights.length - curHeight.index;
            maxArea = Math.max(maxArea, width * curHeight.height)

        }
        return maxArea
    }


}
