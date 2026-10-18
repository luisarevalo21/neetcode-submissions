class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    //create a hashmap
    //incremetning the count of of the map
    //then reverse the values and return the values in ascending order

    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
      if (!map.has(nums[i])) {
        map.set(nums[i], 1);
      } else {
        map.set(nums[i], map.get(nums[i]) + 1);
      }
    }

    const entries = Array.from(map.entries());
    entries.sort((a, b) => b[1] - a[1]);

    const res = new Map(entries);
    console.log("map", res);

    const solution = [];
    for (let [key, values] of res.entries()) {
      if (k === 0) {
        console.log("solution", solution);
        return solution;
      }
      solution.push(key);
      k--;
    }
    return solution;
  }
}

// const solution = new Solution();
// solution.topKFrequent([7, 7], 1);
