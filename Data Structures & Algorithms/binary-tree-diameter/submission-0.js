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
    diameterOfBinaryTree(root) {


        //recurse on the root tracking usign a global variable the largest i have seen using math max
        //use dfs to calculacae how far i go down and get the value 
        //compare to the curent max i have and update if its larger

        let diameter = 0;
        const dfs = (root) => {

            if (root === null) {
                return 0;
            }


            let left = dfs(root.left);
            let right = dfs(root.right)


            diameter = Math.max( diameter, left+right)

            return 1 + Math.max(left, right)


        }

        console.log(dfs(root))

        return diameter
    }
}
