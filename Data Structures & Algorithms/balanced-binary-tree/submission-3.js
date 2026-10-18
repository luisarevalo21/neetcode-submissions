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
    isBalanced(root) {

        //iterate using dfs 
        //checking if the the array of 0 is valud and second array[0] is valid
        //add if the math.abs(depts ) is less than <1 if so update the balance and recurse 

        const dfs = (root) => {

            if (root === null) {
                return [true, 0]
            }


            let left = dfs(root.left);
            let right = dfs(root.right)
            // let balanced = null
            if (left[0] && right[0] && (Math.abs(right[1] -left[1]) <= 1)) {
                return [true, 1 + Math.max(left[1], right[1])]
            }

            return [false, 1 + Math.max(left[1], right[1])]

        }



        const res = dfs(root);

        return res[0]

    }
}
