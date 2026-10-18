/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxPathSum(root) {

        //calcuate the largest number when returning 
        //total is the largest number of the two i have foundbased on the current node the left and right 

        //reutrning will be the largest of the two nodes 
        //total will be checked on including the node and adding the left amnd right 

        //return statement is the largest of the 3 and return the node.val + the max 

        let total = -Infinity
        const dfs = (root) => {

            if (!root) {
                return 0
            }


            let left = dfs(root.left);
            let right = dfs(root.right);


            // let cur = 0
            // if (left + right > left && left + right > right) {
            //     cur = left + right
            // }
            // else {
            //     cur = Math.max(left, right)
            // }


            total = Math.max(total, (left + right + root.val), root.val, root.val+left, root.val+right)
            return root.val + Math.max(left, right, 0)

        }


        dfs(root)
        return total

    }
}
