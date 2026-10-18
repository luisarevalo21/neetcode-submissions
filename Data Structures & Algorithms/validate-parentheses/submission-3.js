class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        const stack = [];

        for (let i = 0; i < s.length; i++) {

            if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
                stack.push(s[i])
            }
            else {
                // console.log(stack[i])

                if ((s[i] === ']' && stack[stack.length -1] === "[") || (s[i] === '}' && stack[stack.length -1] === "{") || (s[i] === ')' && stack[stack.length -1] === "(")) {
                    
                    stack.pop()
                }else {
                    return false
                }
            }
            console.log('stac', stack)

        }
        return stack.length ===0

    }
}
