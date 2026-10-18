class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {

        let left = 0;
        let max = 0;
        let res = 0;

        const map = new Map();
        for (let right = 0; right < s.length; right++) {
            if (!map.has(s[right])) {
                map.set(s[right], 1)
            } else {
                map.set(s[right], map.get(s[right]) + 1)
            }
            max = Math.max(map.get(s[right]), max)
            if ((((right - left) + 1) - max <= k)) {
                res = Math.max(res, (right - left) + 1);
            }
            else {
                while (((right - left) + 1) - max > k) {
                    map.set(s[left], map.get(s[left]) - 1)
                    left++;
                }
            }

        }
        return res;
    }
}
