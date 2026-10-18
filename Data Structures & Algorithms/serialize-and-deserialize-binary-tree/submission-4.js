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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {


        let str = ""
        const dfs = (root) => {

            if (!root) {
                return "N,"
            }

            str += `${root.val},`
            let left = dfs(root.left)
            if (left === "N,")
                str += left
            let right = dfs(root.right)
            if (right === "N,")
                str += right
            return null

        }
        dfs(root)
        return str;

    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {

        if (!data) return null
        const arr = data.split(",")
        let i = 0;
        const dfs = (index) => {
           
            if (arr[index] === "N") {
                return null
            }
            let cur = new TreeNode(arr[index])

            i++
            let left = dfs(i)
            i++
            let right = dfs(i);
            cur.left = left;
            cur.right = right

            return cur
        }

        return dfs(i)

    }
}
