class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     *
     * two pointesr for sure left and right
     * res arary will store index1, index2 for the solution
     * non-decreasing order
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length - 1;

        while (left < right) {
            if (numbers[left] + numbers[right] === target) {
                return [left + 1, right + 1];
            }

            if(numbers[left] + numbers[right] > target ){
                right--;
            }
            else {
                left++;
            }
        }
    }
}
