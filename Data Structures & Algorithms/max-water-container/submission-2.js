class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     *
     * //two pointesr apporach
     * first check the current left and right values calculuate the area save this area as it will be the result
     * determine if i should move left inwards or right inwards i want to move the min of the two
     * if the same pick left
     * i pick min as water cannot spill over the larger one?
     */
    maxArea(heights) {
        let curMax = 0;
        let left = 0;
        let right = heights.length - 1;

        while (left < right) {
            let height = Math.min(heights[left], heights[right]);
            let width = right - left;

            let area = height * width;
        // console.log('area', area)
            curMax = Math.max(curMax, area);
            // console.log("cur Max", curMax)

            if (heights[left] > heights[right]) {
                right--;
            } else if (heights[left] < heights[right]) {
                left++;
            } else {
                left++;
            }
        }
        return curMax;
    }
}
