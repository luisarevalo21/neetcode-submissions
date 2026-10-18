class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {



        const map = new Map();
        const maxHeap = new MaxPriorityQueue();


        for (let i = 0; i < tasks.length; i++) {
            map.set(tasks[i], (map.get(tasks[i]) || 0) + 1)
        }

        console.log(map)


        for (let [key, value] of map) {
            maxHeap.push(value)
        }


        const queue = []
        let time = 0;

        while (maxHeap.size() > 0 || queue.length > 0) {

            time++;
            if (maxHeap.size() > 0) {
                let cur = maxHeap.pop();
                console.log('cur', cur)
                console.log("time", time)
                cur--;
                if (cur > 0) {
                    queue.push([cur, time + n])
                }
            }


            if (queue.length > 0 && queue[0][1] === time) {
                const popped = queue.shift();
                maxHeap.push(popped[0])
            }
        }

        return time;
    }
}
