class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {


        //iterate the rows using a map check if each row has only 1 value of size 1
        for (let row = 0; row < 9; row++) {
            const set = new Set();
            for (let i = 0; i < 9; i++) {

                if (board[row][i] !== ".") {
                    if (set.has(board[row][i])) return false
                    set.add(board[row][i])
                }

            }
        }

        //iterae through all the columsn 

        for (let i = 0; i < 9; i++) {
            const set = new Set();
            for (let col = 0; col < 9; col++) {
                if (board[col][i] !== ".") {
                    if (set.has(board[col][i])) return false;

                    set.add(board[col][i])
                }

            }
        }




        //grid

        for (let square = 0; square < 9; square++) {
            let set = new Set();
            for (let i = 0; i < 3; i++) {

                for (let j = 0; j < 3; j++) {

                    const rowGrid = Math.floor(square / 3) * 3 +i;
                    const colGrid = (square % 3) * 3 +j;
                    if (board[rowGrid][colGrid] !== '.') {


                        if (set.has(board[rowGrid][colGrid])) {
                            return false
                        }
                        set.add(board[rowGrid][colGrid]);

                    }
                }

            }
        }
        return true;

    }
}
