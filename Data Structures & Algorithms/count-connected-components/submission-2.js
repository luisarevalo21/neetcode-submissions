class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {


        //dfs works by searching the entire graph marking a node as visited 
        // if i visit it. incremenr the connected count 
        //move onto the next value if its not in my set skip it 
        //find anthoer connected dfs on it and incremnet the count once i iterate throuhg it 
        // if its  leaf node return true as i can't xplore it 
        //return the count

        const map = new Map();

        for (let i = 0; i < n; i++) {
            map.set(i, [])
        }


        for (let i = 0; i < edges.length; i++) {
            const [edge1, edge2] = edges[i]
            map.set(edge1, [...map.get(edge1), edge2])
            map.set(edge2, [...map.get(edge2), edge1])

        }




        function dfs(node, parent) {


            if (visitedSet.has(node)) {
                return;
            }
            if (map.get(node).length === 0) {
                visitedSet.add(node);
                return;
            }

            visitedSet.add(node);
            const neighbors = map.get(node);
            // console.log("neights", neighbors)
            for (let i = 0; i < neighbors.length; i++) {


                if (parent === neighbors[i]) continue
                dfs(neighbors[i], node)

                // console.log("inside for", i)
            }
            return;
        }

        let componentCount = 0;
        let visitedSet = new Set();
        for (let i = 0; i < n; i++) {
            // console.log(visitedSet)
            //bug is its updating teh count then finds another
            //that connects to a already counted graph
            if (!visitedSet.has(i)) {
                dfs(i, -1);
                componentCount++;
            }

        }
        // if (dfs(i) && visitedSet.has(i)) {
        // console.log("i", i)

        return componentCount
    }
    // console.log("map", map)

}
