class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {

        //iterate through each value check for the operations otherwise add to stack and parseint
        //if operation perform operation and trunc for divide

        const stack = []

        for (let i = 0; i < tokens.length; i++) {



            if (tokens[i] === "+") {
                stack.push(stack.pop() + stack.pop())

            }
            else if (tokens[i] === "-") {
                let a = stack.pop();
                let b = stack.pop()

                stack.push(b - a)

            }
            else if (tokens[i] === "*") {
                stack.push(stack.pop() * stack.pop())

            }
            else if (tokens[i] === "/") {
                let a = stack.pop();
                let b = stack.pop()
                stack.push(Math.trunc(b / a))
            }
            else {
                stack.push(parseInt(tokens[i]))
            }
        }
        return stack.pop()

    }
}
