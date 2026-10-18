class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        //[0 ,1]
        //prerequs, you must take [1] first then you can take cours[0]

        //iterat throug the prereqs and add them to a map course => [prereq]

        //once completed recurse on the course traversing through the prereq and initilizing the path set
        //if the preq is in the pathset return false 

        //once i come back pop of the current node from the path 

        const map = new Map();
        for (let i = 0; i < numCourses; i++) {
            map.set(i, [])
        }
        for (let i = 0; i < prerequisites.length; i++) {
            const [course, preReq] = prerequisites[i]

            const nodes = map.get(course)
            nodes.push(preReq)

            map.set(course, nodes)
        }

        console.log(map)

        const visitedSet = new Set();

        function dfs(course) {


            //happy path reached a root no more prereqs

            if (visitedSet.has(course)) return false

            if (map.get(course).length === 0) {
                return true
            }

            visitedSet.add(course)
            const nodes = map.get(course);
            for (let i = 0; i < nodes.length; i++) {


                if (!dfs(nodes[i])) {
                    return false
                }

            }
            visitedSet.delete(course)
            map.set(course, [])
            return true
        }

        for (let key of map.keys()) {
            if (!dfs(key)) {
                return false
            }
            // visitedSet.clear()

        }
        return true
    }
}
