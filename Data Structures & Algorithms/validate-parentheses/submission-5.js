class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {


        const stack = []

        const map = {
            "}": "{",
            "]": "[",
            ")": "("
        }


        for(let i=0; i<s.length; i++){

            // if its not in the map add to it 
            if(!map[s[i]]){
                stack.push(s[i])
            }
            else {
                //check if the top of the stack is equal to the current value 
                //if so pop 
                //otherwise return false

                if(stack[stack.length -1] === map[s[i]]){
                    stack.pop()
                }
                else {
                    return false
                }

            }

        }
        return stack.length ===0
        //use a map with closen to => open 
        //iteratre throguh the string 
        //check if its in the map then popfrom stack continue 
    }
}
