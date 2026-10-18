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

        let pair = position.map((p, i) => [ p,  speed[i] ]);

        pair.sort((a,b)=> a[0] - b[0]);
        // const arr = []
        // for (let i = 0; i < position.length; i++) {

        //     arr.push({ position: position[i], speed: speed[i] });



        // }

        // const sortedArray = arr.sort((a, b) => a.position - b.position);

        const stack = [];

        for (let i = pair.length - 1; i >= 0; i--) {
            stack.push(((target - pair[i][0]) / pair[i][1]))



            if (stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {

                stack.pop()

            }

        }

        return stack.length;
    }
}
