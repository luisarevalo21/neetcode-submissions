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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
         let counter = 0;
    let res = 0
    const dfs = (root) => {


        if (!root) {
            return
        }

        dfs(root.left)
        counter++
        if (counter === k) {
            res = root.val
            return
        }
        dfs(root.right)
        return
    }

    dfs(root)
    return res;
    }
}
