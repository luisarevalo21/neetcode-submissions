class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        const res = [1]
        //create the prefix array by iterating throuhg nums
        //following the the step of everyhting multipied up to the that point 

        for (let i = 1; i < nums.length; i++) {
            
            res[i] = res[i-1]* nums[i-1];

        }

        console.log('res',res)

        //now iterate through nums backwards
        //calculating the suffix in place
        //the suffix at nums[n-1] will be the value times suffix = 1;
        //suffix wil be multiped by nums[n-1];
        //then multpied by the res[i+1]

        let suffix =1;
        for(let i =nums.length-1; i>=0; i--){
                res[i] = res[i]*suffix;
                suffix*= nums[i]


        }
return res;

    }
}
