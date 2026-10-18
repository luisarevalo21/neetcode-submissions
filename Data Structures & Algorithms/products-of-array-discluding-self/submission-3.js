class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        const res = new Array(nums.length).fill(1)


        //create res storing the prefix 
        //then iterate backwards updating the res with the suffix of each one based on the nums

        for (let i = 1; i < nums.length; i++) {
            res[i] = nums[i - 1] * res[i - 1]
        }
        console.log('rrs', res)


        let post = 1;

        for (let i = res.length - 1; i >= 0; i--) {
            res[i] = res[i] * post;
            post *= nums[i]
        }
        return res;
    }
}