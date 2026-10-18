class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        ///iterae temperatures in reverse order 
        // create a stack 
        //create res of size temps.length set the last element to 0 nothing greatter to the right 
        //push the last elment as nothing will be larger than the right 
        //check the top of the stack 
        //if it is smaller pop continue till a value is larger 
        //set the res to top of stack - cur index 
        //push current index to top of stack 

        //continue till i ==0 

        //return res 


        const stack = [];

        const result = new Array(temperatures.length - 1).fill(0);

        for (let i = temperatures.length - 1; i >= 0; i--) {


            while (temperatures[stack[stack.length - 1]] <= temperatures[i] && stack.length >0) {
                stack.pop();

            }


            if (stack.length === 0) {
                result[i] = 0;
            } else {

                result[i] = stack[stack.length - 1] - i;
            }
            stack.push(i)
            // if(temperatures[stack[stack.length -1]] < )



        }
        console.log(result)
        return result


    }
}
