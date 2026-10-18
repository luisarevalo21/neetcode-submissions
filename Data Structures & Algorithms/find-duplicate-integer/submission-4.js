class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   * brute force maintain a map if not in map add it
   * if it is i found duplicate return the val
   *
   * find the cycle first
   * slow 1 step
   * fast by 2
   * once a the cylce has been found reset slow to the begining
   * then move each pointer by 1
   * return when the match
   *
   *
   *
   * find cycle first by searching the intersecting points indexing of the array
   * once the intersection is found
   * move slow to begining
   * and move slow and fast by one
   * when they match I found the duplicate
   */
  findDuplicate(nums) {
    // //find the cycle first
    // let i = 0;
    // let j = 2;
    // let slow = null;
    // let fast = null;
    // while (i < nums.length) {
    //   if (i === j % nums.length) {
    //     i = 0;
    //     break;
    //   }
    //   i++;
    //   j = j + 2;
    // }
    // while (i < nums.length) {
    //   slow = nums[i];
    //   fast = nums[j % nums.length];
    //   if (slow === fast) {
    //     return slow;
    //   }
    //   i++;
    //   j++;
    // }

    let slow = 0;
    let fast = 0;
    while (true) {
      slow = nums[slow];
      fast = nums[nums[fast]];

      if (slow === fast) {
        slow = 0;
        break;
      }
    }

    console.log("slow", fast);
    while (true) {
      slow = nums[slow];
      fast = nums[fast];

      if (slow === fast) {
        return slow;
      }
    }
  }
}

