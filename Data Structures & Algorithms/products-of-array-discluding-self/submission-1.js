class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {


  const prefix = [1];
  for (let i = 1; i < nums.length; i++) {
    prefix[i] = prefix[i - 1] * nums[i - 1];
  }

  const suffix = new Array(nums.length).fill(1);

  console.log("suff", suffix);
  for (let i = nums.length - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1] * nums[i + 1];
  }

  const result = [];

  for (let i = 0; i < nums.length; i++) {
    result[i] = suffix[i] * prefix[i];
  }
return result


    }

}
