class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {

        //iterate through the list of nums until the indexes are the same using slow and fast 
        //once they meet i have found the duplicate and return the value at that index

        let slow = 0;
        let fast = 0;

        while (true) {

            slow = nums[slow];
            fast = nums[nums[fast]]
            console.log('fast', fast)


            //check if they meet
            if (slow === fast)
                break

        }
        let slow2 = 0;
        while (true) {

            slow = nums[slow];
            slow2 = nums[slow2];
            if(slow=== slow2){
                return slow
            }
        }


        //slow and fast meet return the value 

        return nums[slow]

    }
}
