class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {

        if (s1.length > s2.length) {
            return false
        }

        //iterate through the s1 and added it to a map/array indexed via the letteres 
        //

        //create the first window iteration and add it to my second map/array
        ///check how many matches occured 

        //check if its 26 if not contiue 

        //iterate through the window sizes/
        //deceremtn the count for left 
        //increment the count for right 
        //until matches is 26 return triue


        //otherwise return if matches === 26


        const s1Map = new Array(26).fill(0)
        const s2Map = new Array(26).fill(0)

        for (let i = 0; i < s1.length; i++) {
            s1Map[s1[i].charCodeAt(0) - 97] += 1;
            s2Map[s2[i].charCodeAt(0) - 97] += 1;

            // s1Map[value - 97] += 1
        }


        //compare matches 
        let matches = 0;
        for (let i = 0; i < s1Map.length; i++) {
            if (s1Map[i] === s2Map[i]) {
                matches++
            }
        }

        let left = 0;
        for (let right = s1.length; right < s2.length; right++) {
            if (matches === 26) {
                return true;
            }

            const rightIndex = s2[right].charCodeAt(0) - 97;

            s2Map[rightIndex] += 1;
            if (s1Map[rightIndex] === s2Map[rightIndex]) {
                matches++;
            }
            else if (s1Map[rightIndex] + 1 === s2Map[rightIndex]) {
                matches--;
            }

            const leftIndex = s2[left].charCodeAt(0) - 97;

            s2Map[leftIndex] -= 1;
            if (s1Map[leftIndex] === s2Map[leftIndex]) {
                matches++;
            }
            else if (s1Map[leftIndex] - 1 === s2Map[leftIndex]) {
                matches--;
            }
            left++

        }



        return matches === 26
    }
}
