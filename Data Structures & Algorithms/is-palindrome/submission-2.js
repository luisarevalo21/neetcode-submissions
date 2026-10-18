class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */



    isPalindrome(s) {

       function isLetter(char) {
            return /[a-zA-Z]/.test(char);
        }
        //first trim the whitespace and save the updated string
        //estblish to pointers left and right 
        //check while they are the same continue otherwise return false 


        const updatedString = s.replace(/\W/g, '').toLowerCase();




        let left = 0;
        let right = updatedString.length - 1;
        // if (!isLetter(updatedString[right])) {
        //     right--;
        // }

        while (left < right) {

            if (updatedString[left] !== updatedString[right]) {
                return false
            }
            left++;
            right--;
        }


        return true;
    }
}
