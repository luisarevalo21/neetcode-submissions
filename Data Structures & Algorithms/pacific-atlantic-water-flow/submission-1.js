class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {


        //run dfs on the top left border checking if the any of the cells neighbors can be add to the set
        //recurse if the next clel is greater or equal to the current if so recurse on it 
        //pacific set 

        //for right and bottom cells check same recursion and add to the atlantic set 


        //once completed the dfs check the heights and see if the paciic set and atlanic set as them if so add them to res 

        const ROWS = heights.length;
        const COLS = heights[0].length;
        const pacificSet = new Set()
        const atlanticSet = new Set()
        const res = []





        //run dfs on the top 
        for (let col = 0; col < COLS; col++) {
            dfsPacific(0, col)
        }

        //check the left border
        for (let row = 0; row < ROWS; row++) {
            dfsPacific(row, 0)
        }

        //check the right border
        for (let row = 0; row < ROWS; row++) {
            dfsAtlantic(row, COLS - 1)
        }
        //check bottom border
        for (let col = 0; col < COLS; col++) {
            dfsAtlantic(ROWS - 1, col)
        }



        function dfsAtlantic(row, col) {

            if (row < 0 || row >= ROWS || col < 0 || col >= COLS || atlanticSet.has(`${row},${col}`)) {

                return
            }

            atlanticSet.add(`${row},${col}`)

            if (row + 1 < ROWS && heights[row][col] <= heights[row + 1][col] && !atlanticSet.has(`${row + 1},${col}`)) {
                dfsAtlantic(row + 1, col)
            }
            if (row - 1 >= 0 && heights[row][col] <= heights[row - 1][col] && !atlanticSet.has(`${row - 1},${col}`)) {
                dfsAtlantic(row - 1, col)
            }
            if (col + 1 < COLS && heights[row][col] <= heights[row][col + 1] && !atlanticSet.has(`${row},${col + 1}`)) {
                dfsAtlantic(row, col + 1)
            }
            if (col - 1 >= 0 && heights[row][col] <= heights[row][col - 1] && !atlanticSet.has(`${row},${col - 1}`)) {
                dfsAtlantic(row, col - 1)
            }
            return
        }

        //pacific
        function dfsPacific(row, col) {

            //outof bounds or in the set 
            if (row < 0 || row >= ROWS || col < 0 || col >= COLS || pacificSet.has(`${row},${col}`)) {
                return
            }

            pacificSet.add(`${row},${col}`)

            if (row + 1 < ROWS && heights[row][col] <= heights[row + 1][col] && !pacificSet.has(`${row + 1},${col}`)) {
                dfsPacific(row + 1, col)
            }
            if (row - 1 >= 0 && heights[row][col] <= heights[row - 1][col] && !pacificSet.has(`${row - 1},${col}`)) {
                dfsPacific(row - 1, col)

            }
            if (col + 1 < COLS && heights[row][col] <= heights[row][col + 1] && !pacificSet.has(`${row},${col + 1}`)) {
                dfsPacific(row, col + 1)
            }
            if (col - 1 >= 0 && heights[row][col] <= heights[row][col - 1] && !pacificSet.has(`${row},${col - 1}`)) {
                dfsPacific(row, col - 1)
            }
            return
        }

        // console.log('pactific set', pacificSet)
        // console.log('atlantic set', atlanticSet)


        //check afterwards 

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
