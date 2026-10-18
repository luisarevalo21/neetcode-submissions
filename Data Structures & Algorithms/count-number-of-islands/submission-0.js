class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {


        let numIslands = 0;


    const set = new Set();
    //iterat theourh board 

    const ROWS = grid.length;
    const COLS = grid[0].length
    for (let row = 0; row < ROWS; row++) {

        for (let col = 0; col < COLS; col++) {


            if (grid[row][col] !== "0" && !set.has(`${row},${col}`)) {
                dfs(row, col)
                numIslands++;
            }


        }

    }

    return numIslands

    function dfs(row, col) {
        //i increment numIslands once i exhaused all of the dfs and can no longer explore that point anymore 

        //out of bounds or no longer an island
        if (row >= ROWS || col >= COLS || row < 0 || col < 0 || grid[row][col] === '0' || set.has(`${row},${col}`)) {
            return
        }
        // set.add(`${row},${col}`)


        //foudn a portion of an island recurse and explore it 
        if (grid[row][col] === '1') {
            set.add(`${row},${col}`)
            // grid[row][col] = "0"
            dfs(row + 1, col);
            dfs(row - 1, col);
            dfs(row, col + 1);
            dfs(row, col - 1);


        }



        return
    }
    }
}
