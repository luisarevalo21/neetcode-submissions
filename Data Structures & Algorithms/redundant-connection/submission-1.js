class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {

        //iterate through the edges. adding the conneitosn to my map 
        //check if adding it creates a loop if so reutrn this as the answer 
        //if it doesnt add the next one and connect to the graph 
        //use dfs to check if a cycle is detected 
        //if i find another use this one as it must be the last one 
        //continue till i reach the end of the edges


        //check if its still connected by being able to viist all nodes 
        // all nodes must be in the visited set 
        //othrewise i didn't explore them all

        const map = new Map();
        const n = edges.length
        //map is index mapped to its edges 
        for (let i = 1; i <= n; i++) {
            map.set(i, [])
        }

        // console.log("map", map)
        //add the first index
        //add it to the map
        //check if a cycle occured if so save this index remove it from the map? 
        //also check if i viisted all the nodes if true save it 

        //continue 
        // const visitedSet = new Set();
        // const currentPath = new Set();
        let res = []
        //so instead of check the first two values and see if they are already connected 
        //checking the map for each one? 
        //need to check if leftedge and right edge are connected 
        //pass them both to the dfs and see if i find rightEdge in the leftEdges path 
        //if so return true as I found the duplciate edge return it 
        //otherwise explore leftEdes nodes 
        //if i exlpred all of leftEdges nodes and dind't find it 
        //return false and try the next pair and add them to the map
        for (let i = 0; i < edges.length; i++) {
            const [leftEdge, rightEdge] = edges[i]

            //use dfs to see if the edges are connected? 
            if (dfs(leftEdge, rightEdge, -1, new Set())) {
                res = [leftEdge, rightEdge]
                return [leftEdge, rightEdge]
            }
            // visitedSet.clear()
            // currentPath.clear();
            map.set(leftEdge, [...map.get(leftEdge), rightEdge])
            map.set(rightEdge, [...map.get(rightEdge), leftEdge])
            console.log("map", map)

        }


        return res;

        function dfs(leftEdge, rightEdge, parent, currentPath) {
            // const currentPath = new Set();
            //found the duplicate return true
            if (leftEdge === rightEdge) {
                return true
            }



            currentPath.add(leftEdge);
            // console.log("currrent path", currentPath)
            // visitedSet.add(leftEdge);
            const neighbors = map.get(leftEdge)

            for (let i = 0; i < neighbors.length; i++) {
                if (neighbors[i] === parent) {
                    continue
                }
                if (dfs(neighbors[i], rightEdge, leftEdge, currentPath)) {
                    return true
                }

            }

            return false

        }
    }
}
