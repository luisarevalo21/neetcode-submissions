class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {


if(s1.length > s2.length)return false
        //crate array of letters for s1 26 letters 
        //create for s2 but only up to the size of s1 

        const s1Map = new Array(26).fill(0)
        const s2Map = new Array(26).fill(0)

        for (let i = 0; i < s1.length; i++) {


            s1Map[s1[i].charCodeAt(0) - 97] += 1
            s2Map[s2[i].charCodeAt(0) - 97] += 1;

        }

        let matches = 0
        for (let i = 0; i < 26; i++) {
            if (s1Map[i] === s2Map[i]) {
                matches++
            }
        }


        let left = 0;
        // let right = s1.length;

        for (let right = s1.length; right < s2.length; right++) {

            //add current right to widnow 
            if (matches === 26) {
                return true;
            }
            let index = s2[right].charCodeAt(0) - 97;

            s2Map[index] += 1;

            if (s1Map[index] === s2Map[index]) {
                matches++
            } else if (s1Map[index] + 1 === s2Map[index]) {
                matches--;
            }

            index = s2[left].charCodeAt(0) - 97;

            s2Map[index] -= 1;

            if (s1Map[index] === s2Map[index]) {
                matches++
            } else if(s1Map[index] - 1 === s2Map[index]) {
                matches--;
            }
            left++

        }
        console.log(matches)

        return matches === 26;

        //let matches 
        //so itearat through s1map and s2map count matches 



        // left and rihgt pointer 
        //right will in the for loop 
        //dcremenr the count of the current left then


        //increment value of current left 
        //add teh value of the new left 
        // check values of s1map to s2map of the current left 

        //matches increments when the current window size's values previous values didn't match
        //but now they do so matches increments

        //matche decremetns wehn previously the counts were the same and no longer the same
        //after moving the window?







    }
}
