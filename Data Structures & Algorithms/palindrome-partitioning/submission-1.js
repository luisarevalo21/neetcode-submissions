class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {



        //have my res and my starting indexes 
        //i and j 
        //is iterating through the entire string 
        //while j is my split portion 
        //recurse and split when i found a palindrome and slice the remaining string and recurse on it 
        //if its not continute the loop till i do find one 

        //base case is if i reaches the end of the string add the current partion to my res 
        //and return back 



        const res = [];
        const curPartition = []
        let start = 0;
        let end = 0;
        helper(start, end, curPartition)
        return res;
        function helper(start, end, curPartition) {


            //base case start reaches s.length add the partiton to my res
            if (start >= s.length) {
                res.push([...curPartition])
                return
            }

            //otehrwise iterate through the length of s 
            // if a palindrome is found recurse on it updating the bounds 
            //pop back and remove the current one as it cna't be considered anymore 
            for (let i = start; i < s.length; i++) {


                // curPartition.push(s.slice(i, i + 1))
                if (isPalindrome(s.slice(start, i + 1))) {
                    curPartition.push(s.slice(start, i + 1))

                    helper(i + 1, start + 1, curPartition);
                    curPartition.pop()
                }

            }
            return

        }

        function isPalindrome(s) {
            let left = 0;
            let right = s.length - 1;

            while (left < right) {

                if (s[left] !== s[right]) return false
                left++;
                right--;
            }
            return true
        }


    }
}
