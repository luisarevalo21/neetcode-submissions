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
     * @return {TreeNode}
     */
    invertTree(root) {

        if(!root){
            return null
        }

        //recurse on the tree swapping the left and right pointers 
        //then returning the root


        if (root === null) {
            return
        }




        const tempLeft = root.left
        root.left = root.right;
        root.right = tempLeft;
        if (root.left) {
            this.invertTree(root.left)
        }

        if (root.right) {
            this.invertTree(root.right)
        }


    return root
    }
}
