class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {

        const stack = [];
        let maxArea = 0;
        //iterate through the list 
        //set the far left as it might change if its gets cadde 

        //while the stack is not empty and the top value is larger than the current Height 
        //calculate the area and updat the left pointer 
        //add it to the stack 

        for (let i = 0; i < heights.length; i++) {

        let left = i

            while (stack.length > 0 && stack[stack.length - 1].height > heights[i]) {
                //calcualt area 
                const poppedHeight = stack.pop();

                let width = i - poppedHeight.index;

                // console.log('stack inse while', stack)
                maxArea = Math.max(maxArea, width * poppedHeight.height)
                left = poppedHeight.index
            }

            stack.push({ height: heights[i], index: left });
        }

// console.log('max area', maxArea)


        for (let i = 0; i < stack.length; i++) {
            const cur = stack[i]
            maxArea = Math.max(maxArea, cur.height * (heights.length - cur.index))
        } 
return maxArea
        //calcualte remaining values in the stack if any are left 

    }
}
