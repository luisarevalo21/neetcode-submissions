class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        //have two pointesr left and right 
        //continue if the sum of the two pointers is greater i know it cannot be on the right
        //so reduce right by one
        //if it is less than than i know the left must be increased 
        //if i found the sum add one the left and right pointers and return it 




        let left = 0;
        let right = numbers.length - 1;



        while (left < right) {

            const sum = numbers[left] + numbers[right];
            if (sum > target) {
                right--;
            }
            else if (sum < target) {
                left++
            }
            else {
                return [++left, ++right]

            }

        }

    }
}
