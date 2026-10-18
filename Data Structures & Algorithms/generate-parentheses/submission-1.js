class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {

        const res = [];

        function backtrack(open, close, stack) {
            // console.log(stack)
            if (open === n && open === close) {
                res.push(stack.join(""))

                return;
            }
            if (open < n) {

                // console.log('stacl',  [...stack, "("])
                backtrack(open + 1, close, [...stack, "("]);
                // stack.pop();
                // --open;
            }

            if (close < open) {
                // stack.push(")");
                backtrack(open, close + 1, [...stack, ")"])
                // stack.pop();
                // --close
            }

        }

        backtrack(0, 0, [""])
        return res;
    }
}
