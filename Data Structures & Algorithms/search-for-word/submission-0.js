class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {


        let row = 0;
        let col = 0;

        const curRes = []
        let found = false

        //instead of a board create an array of where i've been if its in there can;t go there when i recurse 
        const copyGrid = Array.from({ length: board.length }, () => new Array(board[0].length).fill(0));

        // console.log(copyGrid);


        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {

                if (dfs(i, j, curRes)) {
                    return true;
                }
                // }
            }
        }
        function dfs(row, col, curRes) {


            curRes.push(board[row][col])
            copyGrid[row][col] = 1
            //happy path
            //found path
            if (curRes.join("").toString() === word) {
                // found = true
                return true
            }


            //out of bounds
            if (row === board.length || col === board[0].length || row < 0 || col < 0) {
                return false
            }


            //decide if the current steing matches the beginign of the word 

            // console.log('row', row, col)

            let size = curRes.length
            let compareString = word.slice(0, size)
            // console.log('curRes', curRes)
            // console.log(
            //     'compare string', compareString
            // )
            // console.log(compareString, curRes)
            //if the current equls to the size recurse vetically 
            if (curRes.join('').toString() === compareString) {
                // console.log("inside if")


                //determine if i can go all 4 directions 
                //prevent duplciat tracking going back to a value i've used a map of all the current postiosn? 
                //using a 1,0s if 1 can'tm use if 0 available? 

                if (col + 1 < board[0].length && copyGrid[row][col + 1] !== 1)
                    found = dfs(row, col + 1, curRes);
                if (row + 1 < board.length && copyGrid[row + 1][col] !== 1)
                    found = dfs(row + 1, col, curRes);
                if (row - 1 >= 0 && copyGrid[row - 1][col] !== 1)
                    found = dfs(row - 1, col, curRes);

                if (col - 1 >= 0 && copyGrid[row][col - 1] !== 1)
                    found = dfs(row, col - 1, curRes);

                // dfs(row, col - 1, curRes);
            }

            // console.log("curRes", curRes)
            //check vertically

            //check horixontally 


            //if neitehr one worked 
            //remove and iterate to the next value 
            curRes.pop()
            copyGrid[row][col] = 0
            return found


        }


        return false
    }
}
