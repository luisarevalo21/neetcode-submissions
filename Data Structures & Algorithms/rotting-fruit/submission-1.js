class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {




        const ROWS = grid.length;
        const COLS = grid[0].length;
        const q = []
        let time = 0;
        const set = new Set();
        let freshFruit = 0
        for (let row = 0; row < ROWS; row++) {
            for (let col = 0; col < COLS; col++) {

                if (grid[row][col] === 2) {
                    q.push([row, col])
                    // set.add(`${row},${col}`)
                }
                else if (grid[row][col] === 1) {
                    freshFruit++
                }
            }
        }
        bfs();

        function addPair(r, c) {
            //check if its in valid out bounds in set or its 0 
            if (r < 0 || r >= ROWS || c < 0 || c >= COLS  || grid[r][c] !== 1) {
                return
            }

            //valid its an oragne ad to set
            // set.add(`${r},${c}`)
            q.push([r, c])
            freshFruit--;
            grid[r][c] = 2
        }

        function bfs() {
            //need to check freshfruit otherwise i have something in the queue process it 
            //and can't do anything so time gets increment again causing offset
            while (freshFruit > 0 && q.length > 0) {
                const qSize = q.length;

                for (let i = 0; i < qSize; i++) {
                    const [row, col] = q.shift();

                    addPair(row + 1, col)
                    addPair(row - 1, col)
                    addPair(row, col + 1)
                    addPair(row, col - 1)

                }
                time++
            }
        }


        return freshFruit === 0 ? time : -1

    }
}
