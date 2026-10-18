class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        //brute force would be iterate with a double for loop 
        //summing the multiplication excluding the urrent i i'm at and adding it to my solution array via i


        const res = new Array(nums.length).fill(0);


        for (let i = 0; i < nums.length; i++) {

            let sum = 1;
            for (let j = 0; j < nums.length; j++) {

                if (i !== j) {

                    sum *= nums[j]
                }
            }
            res[i] = sum;

        }

    return res;
    }
}
