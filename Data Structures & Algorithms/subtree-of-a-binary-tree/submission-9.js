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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {


        //both null
        if (!root && !subRoot) {
            return true
        }
        //empty root. subroot is not a subroot of an empty root
        if (!root && subRoot) {
            return false
        }

        // if (root && !subRoot) {
        //     return true
        // }


        // if (root.val === subRoot.val) {

            // console.log("this", this.sameTree(root, subRoot))
            if (this.sameTree(root, subRoot)) {
                return true
            }
        // }


        //don't match
        //recurse tree

        let left = this.isSubtree(root.left, subRoot)
        let right = this.isSubtree(root.right, subRoot)

        return left || right
    }

    sameTree(root, subRoot) {
        //both are null
        if (!root && !subRoot) {
            return true
        }
        //one is null
        if (!root || !subRoot) {
            return false
        }

        if (root.val !== subRoot.val) {
            return false
        }


        //left check
        let left = this.sameTree(root.left, subRoot.left)
        //let right check
        let right = this.sameTree(root.right, subRoot.right);

        return left && right

    }
}
