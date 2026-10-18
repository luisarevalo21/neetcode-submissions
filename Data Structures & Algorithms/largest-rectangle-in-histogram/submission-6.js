class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const stack = [];

        let maxArea = 0;


        for (let i = 0; i < heights.length; i++) {
            if (stack.length === 0) {
                stack.push({ height: heights[i], index: i });
            }


            else {
                let cur = null
                while (stack.length > 0 && stack[stack.length - 1].height > heights[i]) {
                    //calculate 
                    cur = stack.pop();

                    let width = i - cur.index ;
                    let curHeight = cur.height;

                    maxArea = Math.max(maxArea, width * curHeight);


                }
                if (!cur) {
                    stack.push({ height: heights[i], index: i })
                } else
                    stack.push({ height: heights[i], index: cur.index })
            }

        }

        console.log('stack', stack)
        console.log('max area', maxArea)
        let i = heights.length;
        if (stack.length > 0) {
            let cur = null
            while (stack.length > 0) {
                //calculate 
                cur = stack.pop();

                let width = i - cur.index ;
                let curHeight = cur.height;

                maxArea = Math.max(maxArea, width * curHeight);


            }
        }
        // while(stack.length >0){}
        console.log('maxarea', maxArea)
        return maxArea
    }
}
