class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {


        const mapPre = new Map  ();
        for (let i = 0; i < numCourses; i++) {
            mapPre.set(i, [])
        }

        for (let i = 0; i < prerequisites.length; i++) {

            const [course, preReq] = prerequisites[i]

            mapPre.set(course, [...mapPre.get(course), preReq])
        }

        // console.log("map", mapPre)

        //set is used to prevent duplciates 
        const resSet = new Set  ()
        const visitedSet = new Set ()
        function dfs(course) {

            if (mapPre.get(course).length === 0) {
                resSet.add(course)
                return true
            }

            // console.log("viisted set", visitedSet)
            if (visitedSet.has(course)) {
                return false;
            }
            visitedSet.add(course)
            const preReqs = mapPre.get(course);
            for (let i = 0; i < preReqs.length; i++) {

                if (!dfs(preReqs[i])) {
                    return false
                }

            }
            visitedSet.delete(course)
            resSet.add(course)
            mapPre.set(course, [])
            return true
        }

        console.log("map", mapPre)

        for (let key of mapPre.keys()) {
            // console.log("key", key)
            if (!dfs(key)) {
                return []
            }
        }
        console.log('res',resSet)
        return [...resSet];
    };
}
