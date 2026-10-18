class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {

        const res = [];

    const stack = []
        function backtrack(open, close) {
            if (open === n && open === close) {
                res.push(stack.join(""))

                return;
            }
            if (open < n) {

                // console.log('stacl',  [...stack, "("])
                stack.push("(")
                backtrack(open + 1, close);
                stack.pop();
                // --open;
            }

            if (close < open) {
                stack.push(")");
                backtrack(open, close + 1,)
                stack.pop();
                // --close
            }

        }

    backtrack(0, 0)
        return res;
    }
}
