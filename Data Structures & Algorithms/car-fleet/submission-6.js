class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {

        //iterate and combine 
        //sort via psiton in ascending order 

        //push time to stack 
        //check if the previous is less tahn or equal pop from stack 
        //return lenght of stack

        const arr = []
        for (let i = 0; i < position.length; i++) {

            arr.push({ position: position[i], speed: speed[i] });



        }

        const sortedArray = arr.sort((a, b) => a.position - b.position);

        const stack = [];

        for (let i = sortedArray.length - 1; i >= 0; i--) {
            const time = ((target - sortedArray[i].position) / sortedArray[i].speed);
            if (stack.length === 0) {
                stack.push(time);
            }

                    stack.push(time)

            if (stack.length !== 1) {

                if (stack[stack.length - 1] <= stack[stack.length - 2]) {
                    stack.pop()
                }
              
            }

        }
    console.log(stack)

        return stack.length;
    }
}
