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
     * 
     * 
     * 
     * store them in a hashmap 
     * i store the ndoes that have both left and rgiht children 
     * since where the split will occur 
     * 
     * 
     * 
     * first i need the finds the nodes 
     * this much easier can i just determine where tehy are based on the nodes 
     *  if p and q are greater than the root search right 
     * vice versa if smaller than root search left 
     * otherwise i need to saerch both 
     * 
     * 
     * the lca will be greater than or 
     * equal to p but less than or equal to q
     * 
     * as i'm trevaersing if a node that i add to 
     * the map satisifys that i return it? 
     * 
     * 
     * 
     * so do i go left or right depending the values p and q as its sorted 
     * as i search store nodes that have left and right children 
     * 
     * 
     * 
     * 
     */
    lowestCommonAncestor(root, p, q) {
        //check if nodes are on left or right 
        //the root is the lca 
        console.log("root", root)


        return dfs(root);

        function dfs(root) {


//cheking for the split

            if ((root.val > p.val && root.val < q.val) || (root.val < p.val && root.val > q.val)) {
                return root
            }


        //if the value is equal to p or q i found it 
            if (p.val === root.val || q.val === root.val) {
                console.log("first if")
                //inside last if
                return root
            }

            // p=7
            // q=8
            //if nodes are less tahn the root search left 
            //search left
            if (p.val < root.val && q.val < root.val) {
                return dfs(root.left)
            }

            //if nodes are greater than the root search right 
            //search right 
            if (p.val > root.val && q.val > root.val) {
                return dfs(root.right)
            }
        }
    }
}