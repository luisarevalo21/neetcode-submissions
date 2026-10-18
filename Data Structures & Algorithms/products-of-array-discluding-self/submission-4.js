class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        const res = [1];

        //iertate through nums multiple the prefix variable to create the prefix 
        //values inside of res which is everything before
        //update the prefix variable iwth the current value at nums as that is now everything 
        //before the next iteration 
        let prefix = 1;
        for (let i = 0; i < nums.length; i++) {
            res[i] = prefix;
            prefix *= nums[i]
        }
        let post = 1;

        console.log('res', res)
        for (let i = res.length - 1; i >= 0; i--) {
            res[i] = post * res[i];
            post *= nums[i]
        }
        return res;
        //for suffix creaet the suffix variable as it will be used to create the solution 
        //by multipling the suffix with the current value inside res 
        //update suffix by multiplying the nums[i] and continute 

    }
}
