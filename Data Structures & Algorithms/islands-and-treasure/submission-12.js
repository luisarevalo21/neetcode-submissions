class Solution {
    /**
     * @param {number[][]} grid
     * run bfs on both gates simulatniosuly adding the neighbrs and updaiting the val at the gate
     */
    islandsAndTreasure(grid) {


        const ROWS = grid.length;
        const COLS = grid[0].length;
        const set = new Set();
        let counter = 0;
        //queue has the gates 
        const queue = []
        for (let row = 0; row < ROWS; row++) {
            for (let col = 0; col < COLS; col++) {
                if (grid[row][col] === 0) {
                    queue.push([row, col])
                }
            }
        }
        bfs();



        //explore th neighbors and update the value at the spot of the grid;
        function bfs() {


            while (queue.length > 0) {


                const queueSize = queue.length;

                for (let i = 0; i < queueSize; i++) {
                    const [row, col] = queue.shift();
                    grid[row][col] = Math.min(grid[row][col], counter)
                    set.add(`${row},${col}`)

                    //explore its niehgbors vlaid if its value is inf and not in the set
                    if (row + 1 < ROWS && grid[row + 1][col] === 2147483647 && !set.has(`${row + 1},${col}`)) {
                        queue.push([row + 1, col])
                    }

                    if (row - 1 >= 0 && grid[row - 1][col] === 2147483647 && !set.has(`${row - 1},${col}`)) {
                        queue.push([row - 1, col])
                    }

                    if (col + 1 < COLS && grid[row][col + 1] === 2147483647 && !set.has(`${row},${col + 1}`)) {
                        queue.push([row, col + 1])
                    }

                    if (col - 1 >= 0 && grid[row][col - 1] === 2147483647 && !set.has(`${row},${col - 1}`)) {
                        queue.push([row, col - 1])
                    }


                }
                counter++

            }

        }

        console.log('grid', grid)
        return grid;
    }
}
