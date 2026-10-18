class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {

        //create a set and dfs adding the current one to the set and dfs
        //if i find it again or cycle retunr false valid trees don't have a cycle

        const visitedSet = new Set();
        const cycle = new Set();

        const map = new Map();

        for (let i = 0; i < n; i++) {
            map.set(i, []);
        }

        for (let i = 0; i < edges.length; i++) {
            const [node1, node2] = edges[i];
            map.set(node1, [...map.get(node1), node2]);
            map.set(node2, [...map.get(node2), node1]);
        }
        // map.set(0, [-1, ...map.get(0)]);

        function dfs(node, prev) {
            //     if (cycle.has(node) && visitedSet.has(node)) {
            //         return false;
            //     }

            console.log("node", node, prev);

            //only 
            // if (map.get(node).length === 1 && parent === map.get(node)[0]) {
            //     return true
            // }
            //in the set found a duplicate return false
            console.log("viisted set", visitedSet)
            // if (visitedSet.has(prev)) return true
            if (visitedSet.has(node)) {
                // console.log("insie false", node)
                return false;
            }

            //     if (map.get(node).length === 0) {
            //         return true
            //     }

            visitedSet.add(node);
            //     cycle.add(node)
            const neighbors = map.get(node);
            console.log('neighrsbor', neighbors)
            for (let i = 0; i < neighbors.length; i++) {
                if (neighbors[i] === prev) {
                    continue;
                }
                if (!dfs(neighbors[i], node)) {
                    return false;
                }
            }
            //     cycle.delete(node)
            // map.set(node, [])
            return true;
            // }
        }

        // console.log(map);
        // for (let i = 0; i < n; i++) {
        // console.log('', i)
        if( dfs(0, -1) && visitedSet.size === n)
         {
            return true;
        }
        // }

        return false;
    }
}


