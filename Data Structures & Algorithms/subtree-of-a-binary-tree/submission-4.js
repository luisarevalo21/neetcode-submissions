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
     * 
     * use dfs to search through the tree 
     * check if the node matches the subroot root.val == subroot.val
     *          if so recurse on the pair and see if they match 
     *          if (dfs(root.left, subRoot.left) && dfs(root.right, subRoot.right))
    
    if they don't return false 
     *  they don't if the ndoes are not the same and the values are not the same
     * 
     * the main recursion will go through the the root tree 
     * and incoproate the subtree when they match
     * if they never do theres no subtree inside the main tree
     * 
     * 1 helper function 
     * the helper basically just used to check if teh current nodes passed in 
     * match and its subchildren which is same tree problem 
     * if helper returns true 
     * return true as i found the subtree 
     * 
     * 
     * i need recurse on the left 
     * and right of the root passing the global subroot 
     * 
     */
    isSubtree(root, subRoot) {
        //checks if the ndoes are valid
        const helper = (rootNode, subRootNode) => {
            //both are null return true
            if (!rootNode && !subRootNode) { return true }
            //if one is null return false 
            if (!rootNode || !subRootNode) {
                return false
            }
            //values don't match
            if (rootNode.val !== subRootNode.val) {
                return false
            }

            //values match so recurse 
            let left = helper(rootNode.left, subRootNode.left);
            let right = helper(rootNode.right, subRootNode.right);


            //returns true if both are valid
            return left && right
        }


        const bfs = (root) => {
            const queue = [root];

            while (queue.length > 0) {
                let size = queue.length

                for (let i = 0; i < size; i++) {

                    const curRoot = queue.shift();
                    if (curRoot.val === subRoot.val) {
                        console.log('values match')
                        if (helper(curRoot, subRoot)) {
                            console.log("helper returns true")
                            return true
                        }
                    }

                    if (curRoot.left) {
                        queue.push(curRoot.left)
                    }
                    if (curRoot.right) {
                        queue.push(curRoot.right)
                    }
                }
            }
            return false

        }

        return bfs(root)

        // helper(root, subRoot)

        // const dfs = (root, subRoot) => {
        //     console.log("inside if", root, subRoot)
        //     if ((!root && subRoot) || (root && !subRoot)) {
        //         return false
        //     }

        //     //if  both are null retunr true 
        //     if (!root && !subRoot) {
        //         return true
        //     }


        //     //the left children or right didn't work 
        //     //but maybe 

        //     //the probelm now:
        //     //is i'm only checking the current root against the current subRoot
        //     //i return false early if they don't match 
        //     //instead i need to check the rest of the nodes of the root
        //     // and see if they it matches subRoot
        //     if (root.val === subRoot.val) {
        //         //returning false early 
        //         //because i'm only checking the current root against the current Subroot
        //         //isntead i should be checking the root's children against the subroot too

        //         if (dfs(root.left, subRoot.left) && dfs(root.right, subRoot.right))
        //             return true
        //     }
        //     //if they don't match recurse on the left side root and rihgt side
        //     //expalin how its returning the true for the current subtree on the left?

        //     //instead 

        //     return dfs(root.left, subRoot) || dfs(root.right, subRoot)
        // }


        //returns if there is a matching subroot 
        // return dfs(root, subRoot)

    }
}

        //traverses the nodes 
        // const dfs = (root) => {

        //     if (root === null) {
        //         return
        //     }



        //     let left = dfs(root.left);
        //     if (helper(left, subRoot)) {
        //         return true
        //     }
        //     let right = dfs(root.right);

        //     return left && right

        // }
        //i need to find the nodes that match and check it

        // return dfs(root)

