class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const stack = []

        const arr = []

        for (let i = 0; i < position.length; i++) {
            arr.push({
                position: position[i],
                speed: speed[i]
            })
        }


        const sortedArr = arr.sort((a, b) => b.position - a.position);




        for (let i = 0; i < sortedArr.length; i++) {

            const time = ((target - sortedArr[i].position) / sortedArr[i].speed);
console.log(time)
            // console.log(stack[stack.length - 1] <= time)
            if (stack.length === 0) {
                stack.push(time)
            }
           else if (stack[stack.length - 1] < time) {
                stack.push(time)
            }
        }
        console.log(stack)

    return stack.length;
    }
}
