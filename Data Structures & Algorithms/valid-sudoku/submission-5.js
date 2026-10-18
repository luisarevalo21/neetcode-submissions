class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        //goes through onces 
        //row, and column will go theouhg 0-9 
        //have 3 maps maps will be set 


        const rowMap = new Map();
        const colMap = new Map();
        const gridMap = new Map();


        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {



                    if(board[r][c] === '.') continue;  

                const rowHouse = Math.floor(r / 3);
                const colHouse = Math.floor(c / 3)


                if (!rowMap.has(r)) {
                    rowMap.set(r, new Set())
                }
                if (!colMap.has(c)) {
                    colMap.set(c, new Set())
                }

                if (!gridMap.has(JSON.stringify([rowHouse, colHouse]))) {
                    gridMap.set(JSON.stringify([rowHouse, colHouse]), new Set())
                }




                //   console.log(  gridMap.get(JSON.stringify([rowHouse, colHouse])))
                if (rowMap.get(r).has(board[r][c])) return false;
                if (colMap.get(c).has(board[r][c])) return false;
                // console.log('mmap,', gridMap.get(JSON.stringify([rowHouse, colHouse]).has(board[r][c])))
                if (gridMap.get(JSON.stringify([rowHouse, colHouse])).has(board[r][c])) return false



                rowMap.get(r).add(board[r][c])
                colMap.get(c).add(board[r][c])
                gridMap.get(JSON.stringify([rowHouse, colHouse])).add(board[r][c])

                console.log('rowMap',rowMap)
            }
        }

        return true

    }
}
