class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        //brute force would be iterste through each value and see if i found the opposite and contiue 
        //as i'm guratneed a solution 


        //alterantive is use a hashmap
        //calc the oppoiste if its my map get and rturn the array
        //otherwise add it to the map 
        // the map will be value = index


        const map = {};

        for (let i = 0; i < nums.length; i++) {
            const result = target - nums[i];

            //if its in the map i found the result and return it


            console.log('result' , result)
            //the result is not in the map// so add add the current index
            if (map[result] === undefined) {
                map[nums[i]] = i
            }

        //found the opposite so return it
            else {


                return [map[result], i]

            }

            // if (map[result] == undefined) {
            //     map[result] = i;
            // }
            // else {
            //     console.log(map)

            //     // return [i, map[result]];
            // }

        }
        console.log(map)

    }
}
