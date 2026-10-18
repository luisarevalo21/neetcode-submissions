class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {

        //find the row the target maybe be in 

        //perform bianry search if the target is betewen the first elemtn in the row an the last its in there 
        //if its not if larger than the last up the row to that row 
        //if it is smaller than the first elmetn move end poitner to it 

        //once i have the row, search the column till i ifnd it or false if i reach the end 





        let rowStart = 0;
        let rowEnd = matrix.length - 1;

        let colStart = 0;
        let colEnd = matrix[0].length - 1;



        let foundRow = 0;

        while (rowStart <= rowEnd) {
            let middleRow = Math.floor((rowStart + rowEnd) / 2);
            //row found
            if (matrix[middleRow][colStart] <= target && target <= matrix[middleRow][colEnd]) {
                foundRow = middleRow;
                rowStart = middleRow + 1

            }
            else if (matrix[middleRow][colEnd] < target) {
                rowStart = middleRow + 1


            }
            else if (matrix[middleRow][colStart] > target) {
                rowEnd = middleRow - 1
            }
        }

        while (colStart <= colEnd) {
            let middleCol = Math.floor((colStart + colEnd) / 2);
            //row found
            if (matrix[foundRow][middleCol] <= target && target <= matrix[foundRow][middleCol]) {
                return true


            }
            else if (matrix[foundRow][middleCol] < target) {
                colStart = middleCol + 1


            }
            else if (matrix[foundRow][middleCol] > target) {
                colEnd = middleCol - 1
            }
        }
        return false




    }
}
