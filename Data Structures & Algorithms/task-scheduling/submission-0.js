class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    
    leastInterval(tasks, n) {



    //store all the letters into a map 
    const map = new Map();
 

    for (let task of tasks) {
        map.set(task, (map.get(task) + 1 || 1))
    }


    //store them into a max heap 
    //based on the value 


    const maxHeap = new MaxPriorityQueue(task => task.value)
    map.forEach((value, key) => {
        if (value !== 0) {
            maxHeap.push({ letter: key, value: value })
        }
    })


    let time = 0;
    const queue = [];
    while (maxHeap.size() > 0 || queue.length > 0) {
        // console.log('isnide while')

        //iterate through my heap or queue. 
        //i only pop from the queue if the heap is empty and the queue's first element time matches 
        //if it doesnt i continute to the next iteration 
        let cur = null
        if (queue[0]?.nextAvailable === time) {
            let { letter, value, nextAvailable } = queue.shift()
            if (value > 0) { maxHeap.push({ letter, value }) }
        }

        if (maxHeap.front() && maxHeap.front().value > 0) {
            cur = maxHeap.pop()
            // console.log("cur", cur)
            cur.value--;
            time++
            if (cur.value > 0) {
                queue.push({ ...cur, nextAvailable: n + time })
            }
        }
        if (maxHeap.size() === 0 && queue[0]?.nextAvailable > time) {
            time++

        }

        // console.log("time", time)
        // if (time === 11) {
        //     return time
        // }


        // if (maxHeap.size() === 0 && queue.length > 0) {
        //     time = queue[0].nextAvailable
        // }


        //i pop from the queue if the heap is empty and if the top of the queue isr eady to be popped by checking if the time is avaialble and the value is greater than 0

        if (maxHeap.size() === 0 && queue.length === 0) {
            return time
        }


    }
    return time;
    }
}
