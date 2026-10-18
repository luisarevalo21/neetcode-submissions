class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */

    //create a stack and check if its not an operation push to the stack 
    //if i find one eval the the top two values of the stack 
    //perform the operation and truncate the result and push to the stack 
    //return the value of the stack
    evalRPN(tokens) {

        const stack = []


        for (let i = 0; i < tokens.length; i++) {


            if (tokens[i] !== '*' && tokens[i] !== '/' && tokens[i] !== '+' && tokens[i] !== '-') {
                stack.push(tokens[i])
            }
            else {

                const a = stack.pop();
                const b = stack.pop();

                let sum = Math.trunc(eval(`${b} ${tokens[i]} ${a}`))

                stack.push(sum)
            }

        }
        return stack[0]

    }

}
