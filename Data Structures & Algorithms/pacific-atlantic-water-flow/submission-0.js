class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {


        const ROWS = heights.length;
        const COLS = heights[0].length;
        let q = []
        const res = []
        const set = new Set()


        for (let row = 0; row < ROWS; row++) {
            for (let col = 0; col < COLS; col++) {
                // console.log(row, col)
                //can reach both oceans 
                if (bfs(row, col)) {
                    res.push([row, col])
                }
                set.clear();
                q = []
            }
        }

        return res
        function bfs(row, col) {
            let reachesTop = false;
            let reachesLeft = false;
            let reachesRight = false
            let reachesBottom = false;
            q.push([row, col])

            while (q.length > 0) {
                // console.log(q)
                const qSize = q.length;
                // if ((reachesTop && reachesLeft) && (reachesBottom && reachesRight)) {
                //     return true
                // }
                for (let i = 0; i < qSize; i++) {
                    // console.log('q', q)
                    if ((reachesTop || reachesLeft) && (reachesBottom || reachesRight)) {
                        return true
                    }
                    const [row, col] = q.shift();

                    if (row === 0) {
                        reachesTop = true;
                    }
                    if (col === 0) {
                        reachesLeft = true;
                    }
                    if (row === ROWS - 1) {
                        reachesBottom = true;

                    }
                    if (col === COLS - 1) {
                        reachesRight = true
                    }

                    //can i explore the top left right and bottom 
                    //set to zero if explored
                    set.add(`${row},${col}`);
                    //explore the bottom if it's one before rows i can explore it then it reaches it which is sccuess
                    if (row + 1 < ROWS && !set.has(`${row + 1},${col}`) && heights[row + 1][col] <= heights[row][col]) {
                        q.push([row + 1, col])
                    }

                    if (row - 1 >= 0 && !set.has(`${row - 1},${col}`) && heights[row - 1][col] <= heights[row][col]) {
                        q.push([row - 1, col])
                    }
                    if (col + 1 < COLS && !set.has(`${row},${col + 1}`) && heights[row][col + 1] <= heights[row][col]) {
                        q.push([row, col + 1])
                    }
                    // console.log('checking', set)
                    if (col - 1 >= 0 && !set.has(`${row},${col - 1}`) && heights[row][col - 1] <= heights[row][col]) {
                        q.push([row, col - 1])
                    }
                }

            }

            // console.log(reachesTop, reachesLeft, reachesBottom, reachesRight)

            return (reachesTop || reachesLeft) && (reachesBottom || reachesRight)
        }
    }
}
