class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {



        //use a heap 
        //store inside the heap size k vlaues 
        //iterate through each points, calculate if its empty add it 
        //calcualte the next value if its smaller than the top of the heap pop and add the new value 
        //continute till i reach the end 
        //return the heap as an array of values 



        const maxHeap = new MaxPriorityQueue((heap) => heap.euclideanRes)

// console.log('maxHapea', maxHeap)
        //store the values into the minheap and use a map to store the array values 

        // const map = new Map();


        for (let i = 0; i < points.length; i++) {

            const [x, y] = points[i];

            const euclideanResult = (x * x) + (y * y)

            if (maxHeap.size() < k) {
                maxHeap.push({ id: i, pts: [x, y], euclideanRes: euclideanResult })
            }

            else if (maxHeap.front().euclideanRes > euclideanResult && maxHeap.size() >= k) {
                maxHeap.pop();
                maxHeap.push({ id: i, pts: [x, y], euclideanRes: euclideanResult });


            }
        }


        const res = []
        const heapArray = maxHeap.toArray();
        for (let i = 0; i < heapArray.length; i++) {
            res.push(heapArray[i].pts)
        }
        return res
    }
}
