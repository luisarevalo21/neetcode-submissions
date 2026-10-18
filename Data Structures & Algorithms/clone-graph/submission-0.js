/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {

        const map = new Map();
        dfs(node)
        function dfs(node) {
            // console.log("node", node)
            // if(!Node)

            if (!node || map.has(node)) return

            const newNode = new Node(node.val)
            map.set(node, newNode)
            const neighbors = node.neighbors

            for (let i = 0; i < neighbors.length; i++) {

                dfs(neighbors[i])
                newNode.neighbors.push(map.get(neighbors[i]))
            }
            return
        }


        // console.log(map.get(1))
        if(!node) return null
        return map.get(node)
    }
}
