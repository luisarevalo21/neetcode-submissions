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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root) {
            return []
        }

        let res = []
        const bfs = (root) => {

            const q = [root]


            while (q.length > 0) {

                let curArr = []


                const size = q.length;

                for (let i = 0; i < size; i++) {

                    let cur = q.shift();
                    curArr.push(cur.val)

                    if (cur.left) {
                        q.push(cur.left)
                    }

                    if (cur.right) {
                        q.push(cur.right)
                    }

                }
                res.push(curArr)
            }

        }
        bfs(root)
        return res;


    }
}
