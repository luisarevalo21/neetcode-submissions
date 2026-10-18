class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    ///brute force iterate through each one bucket basically adding to reuslt
    //otehrwise group them in a map
    //key will be the sroted val into the map if it exists add ito the bucket
    //otherwise create one return the bucketed arrays? values

    // need a helper to check if the strings are anagrams contains the same amount of lettesr
    // to check can sort? and see one by one to see if they match anagram otherwise false

    //isntead of sorting the letters are fixed from a-z lowercase
    //use an array to map it if it exists in the map add it to the pile otherwise create it
    //same logic just avoids the sorting
    groupAnagrams(strs) {
        // console.log(isAnagram("act", 'hat'))
        //\

        const map = new Map();

        // map.set(strs[0].split().sort().join(), [strs[0]]);
        for (let i = 0; i < strs.length; i++) {
            const counter = new Array(26).fill(0);
            for (let j = 0; j < strs[i].length; j++) {
                //i ened the leteter to match the counter index based on the letter grabbed
                // counter[j] = counter[j]+1;
                const curLetter = strs[i][j];
                counter[curLetter.charCodeAt(0) - "a".charCodeAt(0)] += 1;
            }
            if (map.has(counter.join(","))) {
                const val = map.get(counter.join(","));
                map.set(counter.join(","), [...val, strs[i]]);
            } else map.set(counter.join(","), [strs[i]]);
        }
        return [...map.values()];
        // const sorted = strs[i].split("").sort().join("");
        // if( )

        // }

        function isAnagram(str1, str2) {
            if (str1.length !== str2.length) return false;
            const sortedStr1 = str1.split("").sort().join();
            const sortedStr2 = str2.split("").sort().join();
            for (let i = 0; i < sortedStr1.length; i++) {
                if (sortedStr1[i] !== sortedStr2[i]) {
                    return false;
                }
            }

            return true;
        }
    }
}
