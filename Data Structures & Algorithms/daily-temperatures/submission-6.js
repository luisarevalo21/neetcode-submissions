class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {

        //create a stack 
        //push to stack if the top value at that index is greater tahn push
        //if its less pop till the top is greater than 
        //then push and calc the diff in index 

        //return res

        const stack = []

        const res = new Array(temperatures.length).fill(0)

        for (let i = temperatures.length - 1; i >= 0; i--) {



            if (stack.length === 0) {
                stack.push(i)
            }
            else {


                if (temperatures[stack[stack.length - 1]] > temperatures[i]) {
                    res[i] = stack[stack.length - 1] - i
                    stack.push(i)
                }
                else {
                    while (temperatures[stack[stack.length - 1]] <= temperatures[i]) {
                        stack.pop()
                    }
                    if(stack.length !== 0){
                    res[i] = stack[stack.length - 1] - i
                    }
                    stack.push(i)
                }



            }
        }

        return res



    }
}
