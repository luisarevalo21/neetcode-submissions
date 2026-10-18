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
     * @return {boolean}
     */
    isValidBST(root) {

        //creaate a dfs funcition passing an array of bounds 
        //update the left and right bounds based on which i'm iterate through 
        //left udate the right bound
        //right updte the left bound 

        //if the root is null return true 

        //perform the comparison if the current root is between the boudns its valid 
        //otehrwise return false 


        return this.dfs(root, -Infinity, Infinity)
    }

    dfs(root, left, right) {
        if (!root) {
            return true
        }



        //return false if the root.val is greater than the left bound? 
        //or root.val is less than the right bound? 
        if (!(root.val > left && root.val < right)) {
            return false
        }
        return (this.dfs(root.left, left, root.val) && this.dfs(root.right, root.val, right))



    }
}
