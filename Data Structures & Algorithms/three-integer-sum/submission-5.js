class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums) {
    const sortedNums = nums.sort((a, b) => a - b);

    const res = [];
    for (let i = 0; i < sortedNums.length; i++) {
      console.log(i);
      if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
        continue;
      }
      let left = i + 1;
      let right = nums.length - 1;

      console.log(left, right);
      // while (pivot < sortedNums.length) {
      while (left < right) {
        const currentPairs = [];
        const target = -1 * sortedNums[i];
        const sum = sortedNums[left] + sortedNums[right];
        if (target > sum) {
          left++;
        } else if (target < sum) {
          right--;
        } else if (target === sum) {
          currentPairs.push(sortedNums[i], sortedNums[left], sortedNums[right]);
          res.push(currentPairs);
          left++;
          while (sortedNums[left] === sortedNums[left - 1] && left < right) left++;
        }
      }
    }

    console.log("res", res);
    return res;
  }
}