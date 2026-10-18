class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        //using a set 
        //have left start the begining 
        //check if the current value is in the set
        //if it is i  remove the pervious 
        //if not i add it the current value/index

        //update my max size against current set size 

        //continue until i reach the end 
        //return max


        const set = new Set();

        let left = 0;
        let max = 0;
        let subString = ""
        for (let right = 0; right < s.length; right++) {

            // console.log('set', set)
            if (subString.includes(s[right])) {
                const index = subString.indexOf(s[right])
                console.log('index', index)
                const newStart = subString[index + 1]
                let newString = subString.substring(index+1, right)
                subString = "";
                subString += newString
                left = index + 1;
                subString += s[right];
                // set.delete(s[left]);
                // left =right
                // set.add(s[right])
            }
            else {
                subString += s[right];
                // set.add(s[right])
            }

            // console.log(subString.length)
            max = Math.max(subString.length, max)
        }

        return max

    }
}
