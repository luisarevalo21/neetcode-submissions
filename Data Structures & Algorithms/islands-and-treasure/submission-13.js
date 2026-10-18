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
                    set.add(`${row},${col}`)

                }
            }
        }
        function addPair(r, c) {
            if (r < 0 || r >= ROWS || c < 0 || c >= COLS || set.has(`${r},${c}`) || grid[r][c] === -1) {
                return
            }

            set.add(`${r},${c}`)
            queue.push([r, c])
        }


        while (queue.length > 0) {

            const queueSize = queue.length;
            for (let i = 0; i < queueSize; i++) {
                const [row, col] = queue.shift();
                grid[row][col] = counter
                addPair(row + 1, col)
                addPair(row - 1, col)
                addPair(row, col + 1)
                addPair(row, col - 1)
            }
            counter++
        }



        return grid;
    }
}
