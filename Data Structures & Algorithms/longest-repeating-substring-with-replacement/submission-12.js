class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */


    characterReplacement(s, k) {
        //         maintain a map of letters i have seen

        //  iterae throuhg the string
        // left will start at 0
        // right will be in the for loop


        // check if its in my map
        // increment count 
        // otherwise add it and set to 1

        // calcualte my window size - my max character count
        // if valid increment my maxWindowSize counter


        // if not valid
        // while
        // increment left and substract from map count of left character that was removed
        // until valid
        // then contineu with right

        const map = new Map();
        let maxWindowLength = 0;
        let left = 0;
        for (let right = 0; right < s.length; right++) {

            if (!map.has(s[right])) {
                map.set(s[right], 1)
            } else {
                map.set(s[right], map.get(s[right]) + 1)
            }



            const maxCharacterCount = Math.max(...map.values())

            const windowSize = (right - left) + 1;
            if (windowSize - maxCharacterCount <= k) {
                maxWindowLength = Math.max(maxWindowLength, windowSize)
            }


            // if (windowSize - maxCharacterCount > k) {
            while (((right - left) + 1) - maxCharacterCount > k) {
                map.set(s[left], map.get(s[left]) - 1)
                left++;
            }

            // }

        }

        return maxWindowLength;
    }
}
