class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {



        const result = []
        candidates.sort((a, b) => a - b)
        const curCanidates = []
        let currentTotal = 0;
        let i = 0;

        dfsHelper(i, curCanidates, currentTotal);

        function dfsHelper(i, curCanidates, currentTotal) {

            if (currentTotal === target) {
                result.push([...curCanidates])
                return
            }

            //base case if i is greater than the curent size of the cnidates reutnr 
            if (i >= candidates.length || currentTotal > target) {
                return
            }



            //i take it 
            currentTotal += candidates[i];
            curCanidates.push(candidates[i])

            dfsHelper(i + 1, curCanidates, currentTotal)

            currentTotal -= candidates[i];
            curCanidates.pop()

            //i found a solutiona dn don't wnat ot include anymore of the current 
            while (i < candidates.length && candidates[i] === candidates[i + 1]) {
                i++;
            }


            //once i found the duplicate i add i+1 to skip the duplicaet i'm at since the next one isn't a duplicate and update i+1

            dfsHelper(i + 1, curCanidates, currentTotal)

            return
        }
        return result
        //first sort in asc
    }
}
