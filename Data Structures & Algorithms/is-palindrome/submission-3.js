class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     *
     * first removethe white space and join the characters and lowercase all the characters asnd remove special charactesr
     * create a left and right poitner
     * then iterate if they don't match automatically return false
     * otehrwise if left and right cross return true
     *
     */
    isPalindrome(s) {
        const alteredString = s.toLowerCase().split(" ").join("");
        const cleanStr = alteredString.replace(/[^a-zA-Z0-9]/g, "");
        console.log("alteredString", cleanStr);

        let left = 0;
        let right = cleanStr.length - 1;
        while (left < right) {
            if (cleanStr[left] !== cleanStr[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
