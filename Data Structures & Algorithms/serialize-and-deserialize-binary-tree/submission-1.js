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
        console.log('str', str)
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
        console.log('arr', arr[0], arr[1], arr[3])
        let i = 0;
        let size = arr.length;
        const dfs = (size) => {
            if (i > size) {
                return
            }
            console.log('arr', arr[i])
            if (arr[i] === "N") {
                return null
            }
            let cur = new TreeNode(arr[i])

            i++
            let left = dfs(size)
            i++
            let right = dfs(size);
            cur.left = left;
            cur.right = right

            return cur
        }

        return dfs(size)

    }
}
