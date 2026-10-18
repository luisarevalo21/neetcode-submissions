class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {



        const map = new Map()

        //initlize the map
        for (let i = 0; i < numCourses; i++) {
            map.set(i, [])
        }

        for (let i = 0; i < prerequisites.length; i++) {

            const [course, preReq] = prerequisites[i]

            map.set(course, [...map.get(course), preReq])
        }



        // console.log('map', map)
        const visitedSet = new Set()

        //abse case 
        //if its in my visited set return false 
        // otherwise get the preq-req and iterate throuhg them and dfs on it 
        //by adddin the it to the set 
        function dfs(course) {
            //happy path reached the end 
            if (map.get(course).length === 0) {
                return true
            }

            // console.log('visited set', visitedSet, course)
            if (visitedSet.has(course)) {
                return false
            }
            visitedSet.add(course)

            // console.log("visited", visitedSet)
            const preReqs = map.get(course);
            // console.log('prereq', preReqs)

            for (let i = 0; i < preReqs.length; i++) {

                if (!dfs(preReqs[i])) {
                    return false
                }
            }
            visitedSet.delete(course)
            // map.set(course, [])
            return true
        }



        for (let key of map.keys()) {

            if (!dfs(key)) {
                return false
            }
        }
        return true

    }
}
