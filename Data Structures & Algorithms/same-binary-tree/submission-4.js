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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {

        //recurse on both nodes 
        //passing both values to the recursion
        //and check if the nodes are the same and values 
        //if so continue otherwise return false 


        //use bfs 
        //add values to a queue 
        //check if the aclues are the same 
        //if not return false 
        //otherwise continue 
        //




        const bfs = (p, q) => {

            const pQueue = [p]
            const qQueue = [q];

            while (pQueue.length > 0 && qQueue.length > 0) {

                let size = pQueue.length
                // console.log(size, qQueue.length)

                for (let i = 0; i < size; i++) {
                    const curP = pQueue.shift();
                    const curQ = qQueue.shift();


                    //they both are null should
                    console.log(curQ)
                    //return false if the values are not the same
                    //and if one is null and the other isnt' 
                    if (!curP && curQ) {
                        return false
                    }
                    if (curP && !curQ) {
                        return false
                    }
                    if (curP && curQ && curP.val !== curQ.val) {
                        return false
                    }
                    if (curP && curQ) {



                        // if (curP.left) {/
                        pQueue.push(curP.left);

                        // }
                        // if (curP.right) {
                        pQueue.push(curP.right);
                        // }

                        // if (curQ.left) {
                        qQueue.push(curQ.left);

                        // }
                        // if (curQ.right) {
                        qQueue.push(curQ.right);
                        // 
                        // }
                    }
                }

            }
            return true

        }

        return bfs(p, q)



    }
}
