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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {


        return dfs(root)
        function dfs(root) {
            //end of the branch
            if (!root) return



            //solution base case

            // console.log('root/val', root.left?.val === p, root.right?.val === q)

            //if they are on either side of the root i've found it and return it the node 
            //accounts for either side of the root node is equal to p and q
            if ((root.left && root.left.val === p.val) && (root.right && root.right.val === q.val) ||
                (root.left && root.left.val === q.val) && (root.right && root.right.val === p.val)) {
                return root
            }


            if (root.val === p.val || root.val === q.val || (p.val < root.val && q.val > root.val) || (q.val < root.val && p.val > root.val)) {
                return root
            }



            if (root.val > p.val && root.val > q.val) {
                return dfs(root.left)
            }

            if (root.val < p.val && root.val < q.val) {
                return dfs(root.right)
            }

            return



        }
    }
}
