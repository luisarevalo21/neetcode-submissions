class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {

        //create a varibale currentPermuation that will hold the currnet permuation of the array 
        //create a copy of the array of size n setting it all to false 
        //pikc one and recurse while the array is less tahn i < nums.length 
        //picking one and updating the cur array and array of booleans 
        //if the curRes is the same size of nums i found a permuation add it to my res
        //reutrn 
        //when return pop and take another value settign that's value to false and recurse 




        const curPermuation = [];
        const curBooleans = new Array(nums.length).fill(false)
        const resPermutation = []
        let i = 0;

        const helper = (i, curPermuation, curBooleans) => {



            if (curPermuation.length === nums.length) {
                console.log(curPermuation)
                resPermutation.push([...curPermuation])
                return
            }


            // if (i > nums.length) {
            //     return
            // }
            //i take value that isn't true 

            for (let j = 0; j < curBooleans.length; j++) {
                if (!curBooleans[j]) {

                    curBooleans[j] = true
                    curPermuation.push(nums[j])
                    helper(j, curPermuation, curBooleans)
                    curPermuation.pop();
                    curBooleans[j] = false
                }

            }
            // else{
            // }

            // console.log("insinde else")
            //remove it and find antoher one 

            // console.log('curBoleans', curPermuation)
        }




        // }


        helper(i, curPermuation, curBooleans)

        return resPermutation;
    }
}
