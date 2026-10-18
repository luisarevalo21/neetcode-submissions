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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {

    const map = new Map();
    inorder.forEach((node, i) => {
        map.set(node, i)
    })

    const dfs = () => {


        if (preorder.length === 0 || inorder.length === 0) {
            return null
        }


        let curNode = new TreeNode(preorder[0]);
        let mid  = map.get(preorder[0]);

        // let mid : number = inorder.indexOf(preorder[0]);
        curNode.left = this.buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid+1))
        curNode.right = this.buildTree(preorder.slice(mid + 1), inorder.slice(mid+1))

        return curNode;
    }

    return dfs()
    }
}
