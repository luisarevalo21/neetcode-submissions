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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {

        //using dfs 
        //check if the nodes are equak
        //base cases
        //if one node is null return false 
        //if node values are not the same return false 
        //if both are null return true 

        const dfs = (p, q) => {
            if ((!p && q) || (p && !q)) {
                return false
            }

            if (!p && !q) {
                return true
            }

            if (p && q && p.val !== q.val) {
                return false
            }

console.log(p, q)
            // return false
                return dfs(p.left, q.left) && dfs(p.right, q.right);

        }
        return dfs(p, q)
    }
}
