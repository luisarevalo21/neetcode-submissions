class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board) {
    const rowMap = new Map();
    const colMap = new Map();
    const gridMap = new Map();

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] === ".") continue;

        let gridRow = Math.floor(i / 3),
          gridCol = Math.floor(j / 3);
        if (!rowMap.has(i)) {
          rowMap.set(i, new Set());
        }

        if (!colMap.has(j)) {
          colMap.set(j, new Set());
        }

        if (!gridMap.has(JSON.stringify([gridRow, gridCol]))) {
          gridMap.set(JSON.stringify([gridRow, gridCol]), new Set());
        }

        if (rowMap.get(i).has(board[i][j])) return false;
        if (colMap.get(j).has(board[i][j])) return false;
        if (gridMap.get(JSON.stringify([gridRow, gridCol])).has(board[i][j])) return false;
        // if (colMap.has(board[i][j])) return false;
        // if (gridMap.has(board[Math.floor(i / 3)][Math.floor(j / 3)])) return false;

        console.log(gridMap);
        rowMap.get(i).add(board[i][j]);
        colMap.get(j).add(board[i][j]);
        gridMap.get(JSON.stringify([gridRow, gridCol])).add(board[i][j]);
        // if (!colMap.has(board[i][j])) {
        //   colMap.set(board[i][j], new Set(board[i][j]));
        // }
        // if (!gridMap.has(board[Math.floor(i / 3)][Math.floor(j)])) {
        //   gridMap.set(board[Math.floor(i / 3)][Math.floor(j)], new Set(board[i][j]));
        // }
      }
    }
    return true;
  }
}