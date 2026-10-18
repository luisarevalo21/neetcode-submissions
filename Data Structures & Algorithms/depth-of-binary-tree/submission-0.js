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
    maxDepth(root) {

        //use dfs to recurse couting how far i have gone 
        //once i reach null return 0 since i've reacehd the end 
        //return 1 on the recursion to increase the count 
        //compare the left and right and get the maxiumu and add once as
        //i recures on either side and i want the largest either side returns 
        //return the final value 



        if(root === null){
            return 0
        }



        let leftCount = this.maxDepth(root.left);
        let rightCount = this.maxDepth(root.right);

        return 1 + Math.max(leftCount, rightCount);


    }
}
