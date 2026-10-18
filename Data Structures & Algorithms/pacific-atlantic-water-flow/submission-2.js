class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {


        const ROWS = heights.length;
        const COLS = heights[0].length;
        const pacificSet = new Set()
        const atlanticSet = new Set()

        //check the top row and bottom col moves 
        //row is constant 

        for (let col = 0; col < COLS; col++) {
            dfs(0, col, pacificSet, heights[0][col])
            dfs(ROWS - 1, col, atlanticSet, heights[ROWS - 1][col])
        }

        //check the left column and the right column 
        //the col is constant
        for (let row = 0; row < ROWS; row++) {
            dfs(row, 0, pacificSet, heights[row][0])

            dfs(row, COLS - 1, atlanticSet, heights[row][COLS - 1])
        }




        function dfs(row, col, set, previousHeight) {
            //out of bounds 
            if (row < 0 || col < 0 || row >= ROWS || col >= COLS || set.has(`${row},${col}`) || previousHeight > heights[row][col]) {
                return
            };


            set.add(`${row},${col}`)
            dfs(row + 1, col, set, heights[row][col]);
            dfs(row - 1, col, set, heights[row][col]);
            dfs(row, col + 1, set, heights[row][col]);
            dfs(row, col - 1, set, heights[row][col]);

            return
        }




        //check the matching pairs 
        const res = []

        // console.log('pacific set', pacificSet, atlanticSet)
        for (let row = 0; row < ROWS; row++) {
            for (let col = 0; col < COLS; col++) {
                if (pacificSet.has(`${row},${col}`) && atlanticSet.has(`${row},${col}`)) {
                    res.push([row, col])
                }
            }
        }

        return res
    }
}
