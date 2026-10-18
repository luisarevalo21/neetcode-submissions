class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        const map = new Map()
        map.set(")", "(")
        map.set("]", "[")
        map.set("}", "{")


        const stack = [];
            let stackCount = 0
        for (let i = 0; i < s.length; i++) {


            if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
                stack.push(s[i]);
                stackCount++;
            }
            else {
                if (stack[stackCount-1] === map.get(s[i])) {
                    stack.pop()
                    stackCount--;
                }
                else
                    return false
            }
        }
        return stack.length === 0
    }
}
