class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        //use a stack 
        //iterate through the tokens 
        //if i find an operation pop from stack twice? 
        //and perform operation 
        //return the total sum 

        let sum = 0;

        const stack = []
        for (let i = 0; i < tokens.length; i++) {
            if (tokens[i] !== "*" && tokens[i] !== "/" && tokens[i] !== "+" && tokens[i] !== "-") {
                stack.push(tokens[i])
            } else {
                const a = stack.pop();
                const b = stack.pop();
                sum= Math.trunc(eval(`${b} ${tokens[i]} ${a}`))

                // console.log('sum', a, b, tokens[i])
                // console.log('sum', sum)
                stack.push(sum);
            }
        }



        return stack[0]
    }
}
