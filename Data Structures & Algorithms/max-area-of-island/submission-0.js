class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {



    let maxSize = 0;
    // let count: number = 0;
    const ROWS = grid.length;
    const COLS = grid[0].length
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            if (grid[row][col] === 1) {
                // count = 0;
                maxSize = Math.max(dfs(row, col), maxSize)
            }
        }
    }

    return maxSize;

    //dfs must return the max number it saw how many ones it found? 
    function dfs(row, col) {

        //out of bounds reutrn  or invalid index
        if (row >= ROWS || col >= COLS || row < 0 || col < 0 || grid[row][col] === 0) {
            return 0
        }

        //otherwise valid incremnet the count 
        let res = 1;
        if (grid[row][col] === 1) {
            grid[row][col] = 0;
            res += dfs(row + 1, col)
            res += dfs(row - 1, col)
            res += dfs(row, col + 1)
            res += dfs(row, col - 1)
        }

        return res
    }

    }
}
